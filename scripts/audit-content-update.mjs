import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {PROVINCE_ACTIVITIES} from './data/province-activities.js';
import {ZONE2_PANORAMA_EVENTS_V4,ZONE2_LOVE_EVENTS_V4} from './data/zone2-photo-wall-content-v4.js';

const root=path.resolve('Chủ đề 3');
if(Object.values(PROVINCE_ACTIVITIES).flat().some(a=>a.mediaStatus)){
    // Sau khi đã sinh dữ liệu, lệnh chạy lại chỉ xác minh tính toàn vẹn.
    const seen=new Set();let mediaCount=0;
    for(const list of Object.values(PROVINCE_ACTIVITIES))for(const activity of list){
        if(seen.has(activity.id))throw new Error('Duplicate activity '+activity.id);
        seen.add(activity.id);const hashes=new Set();
        for(const media of activity.media||[]){
            const bytes=fs.readFileSync(path.join(root,media.src));
            const digest=crypto.createHash('sha256').update(bytes).digest('hex');
            if(digest!==media.sha256)throw new Error('Changed image '+media.src);
            if(hashes.has(digest))throw new Error('Duplicate media '+activity.id);
            hashes.add(digest);mediaCount++;
        }
    }
    console.log(JSON.stringify({validated:true,activities:seen.size,media:mediaCount}));
    process.exit(0);
}
const base='Tư liệu cụm 2 - Dấu chân tình nguyện/';
const mapRoot=base+'Thuộc 1_Bản đồ nhiệt_Sư phạm đi và yêu/';
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
function rows(file){return read(file).split('\n').filter(l=>/^\| IMG-/.test(l)).map(l=>{
    const match=l.match(/^\|\s*(IMG-\d+)\s*\|\s*`([^`]+)`\s*\|\s*(.*?)\s*\|\s*$/);
    if(!match)throw new Error('Invalid index row: '+l);
    return {id:match[1],file:match[2],title:match[3]};
});}
const data=structuredClone(PROVINCE_ACTIVITIES);
const duplicates=[];const changes=[];
const hash=src=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,src))).digest('hex');
for(const activities of Object.values(data))for(const a of activities){
    a.source='MỤC_LỤC.md và dữ liệu đã đối chiếu';a.media??=[];
    a.media=a.media.map(m=>({...m,sha256:hash(m.src)}));
}
const definitions={
 '01':{slug:'phu-tho',id:'minh-dai-2017',date:'2017',place:'xã Minh Đài, Phú Thọ',title:'Xây dựng nông thôn mới tại Minh Đài'},
 '02':{slug:'ninh-binh',id:'phu-van-2026',date:'2026',place:'xã Phù Vân, Ninh Bình (địa danh Hà Nam trước đây)',title:'Dạy tiếng Anh và kỹ năng sống tại Phù Vân'},
 '03':{slug:'thai-nguyen',id:'ngan-son-2018',date:'2018',place:'huyện Ngân Sơn, Bắc Kạn (nay thuộc Thái Nguyên)',historicalPlace:'Bắc Kạn',title:'Xây dựng sân chơi cho trẻ em vùng cao'},
 '04':{slug:'lang-son',id:'huu-lung-hy-vong-2024',date:'2024',place:'Trung tâm Hy vọng và Nghĩa trang Liệt sĩ huyện Hữu Lũng, Lạng Sơn',title:'Dạy kỹ năng sống và chăm sóc nghĩa trang tại Hữu Lũng'},
 '05':{slug:'tuyen-quang',merge:'ha-giang-mhx-2025'},
 '06':{slug:'lao-cai',id:'an-luong-van-chan-2018',date:'2018',place:'xã An Lương, huyện Văn Chấn, Yên Bái (nay thuộc Lào Cai)',historicalPlace:'Yên Bái',title:'Hỗ trợ khắc phục hậu quả lũ lụt tại Văn Chấn'},
 '07':{slug:'nghe-an',id:'con-cuong-khkt-2026',date:'2026',place:'xã Con Cuông, Nghệ An',title:'Chuyển giao ứng dụng khoa học kỹ thuật tại Con Cuông'},
 '08':{slug:'hung-yen',id:'hung-ha-day-hoc-2018',date:'2018',place:'huyện Hưng Hà, Thái Bình (nay thuộc Hưng Yên)',historicalPlace:'Thái Bình',title:'Dạy học tình nguyện, ôn tập văn hóa hè'},
 '09':{slug:'phu-tho',merge:'tan-lac-tri-thuc-tre-2026'},
 '10':{slug:'thanh-hoa',id:'tan-binh-2024',date:'2024',place:'xã Tân Bình, huyện Như Xuân, Thanh Hóa',title:'Xây dựng nông thôn mới tại Tân Bình'}
};
for(const [prefix,definition] of Object.entries(definitions)){
    const group=rows(mapRoot+'MỤC_LỤC.md').filter(r=>r.file.startsWith(prefix+'_'));
    if(!group.length)throw new Error('Missing group '+prefix);
    const list=data[definition.slug]??=[];
    let event=definition.merge?list.find(a=>a.id===definition.merge):null;
    if(!event){const {slug,merge,...fields}=definition;event={...fields,type:'gallery',summary:group[0].title,fullText:group[0].title,source:mapRoot+'MỤC_LỤC.md',media:[]};list.push(event);}
    const seen=new Set(event.media.map(m=>m.sha256));
    for(const row of group){
        const src=mapRoot+row.file;const digest=hash(src);
        if(seen.has(digest)){duplicates.push({event:event.id,skipped:src,sha256:digest});continue;}
        seen.add(digest);event.media.push({src,title:row.title,sha256:digest});
    }
}
const textEvents=[
 ['tuyen-quang','phuong-do-2014','2014','xã Phương Độ, Hà Giang (nay thuộc Tuyên Quang)','Dạy học và sinh hoạt hè tại Phương Độ','Đội tình nguyện tổ chức dạy học và sinh hoạt hè cho thiếu nhi tại xã Phương Độ năm 2014.'],
 ['thai-nguyen','phu-luong-tu-sach-2018','2018','huyện Phú Lương, Thái Nguyên','Tặng sách, xây dựng tủ sách tại Phú Lương','Chương trình tình nguyện tặng sách và xây dựng tủ sách tại huyện Phú Lương năm 2018.'],
 ['quang-ngai','ly-son-thu-vien-2018','2018','huyện đảo Lý Sơn, Quảng Ngãi','Tặng sách và xây dựng thư viện tại Lý Sơn','Đội tình nguyện thực hiện chương trình tặng sách và xây dựng thư viện tại Lý Sơn năm 2018.'],
 ['bac-ninh','thuan-thanh-2011','2011','Trung tâm Thương bệnh binh Thuận Thành, Bắc Ninh','Tình nguyện tại Trung tâm Thương bệnh binh Thuận Thành','Đội hình tình nguyện của Đoàn trường hoạt động tại Trung tâm Thương bệnh binh Thuận Thành năm 2011.'],
 ['bac-ninh','tan-yen-2011','2011','Trung tâm Thương bệnh binh Tân Yên, Bắc Giang (nay thuộc Bắc Ninh)','Tình nguyện tại Trung tâm Thương bệnh binh Tân Yên','Đội hình tình nguyện của Đoàn trường hoạt động tại Trung tâm Thương bệnh binh Tân Yên năm 2011.'],
 ['ninh-binh','duy-tien-2010','2010','Trung tâm Thương bệnh binh Duy Tiên, Hà Nam (nay thuộc Ninh Bình)','Tình nguyện tại Trung tâm Thương bệnh binh Duy Tiên','Đội hình tình nguyện của Đoàn trường hoạt động tại Trung tâm Thương bệnh binh Duy Tiên năm 2010.'],
 ['ninh-binh','tieng-anh-tieu-hoc-2025','2025','Địa bàn Hà Nam trước đây (nay thuộc Ninh Bình)','Dạy tiếng Anh cho học sinh tiểu học','Đội tình nguyện dạy tiếng Anh cho học sinh tiểu học năm 2025. Danh sách do người dùng cung cấp chưa ghi rõ điểm trường hoặc xã.']
];
for(const [slug,id,date,place,title,summary] of textEvents){(data[slug]??=[]).push({id,type:'article',date,place,title,summary,fullText:summary,media:[],source:'Danh sách địa điểm do người dùng cung cấp',verificationNotes:['Chưa xác định được ảnh phù hợp trong bộ tư liệu hiện có.']});}
for(const activities of Object.values(data)){
    activities.sort((a,b)=>(a.date.match(/(?:19|20)\d{2}/)?.[0]||'9999').localeCompare(b.date.match(/(?:19|20)\d{2}/)?.[0]||'9999')||a.id.localeCompare(b.id));
    for(const a of activities)a.mediaStatus=a.media.length?'available':'text-only';
}
function updateWalls(events,folder){
    const index=rows(base+folder+'/MỤC_LỤC.md');
    const lookup=new Map(index.map(r=>[r.file,r.title]));
    return events.map(e=>({...e,photos:e.photos.map(p=>{
        const name=path.basename(p.imageUrl);const title=lookup.get(name);
        if(!title)throw new Error('No caption '+name);
        if(title!==p.title)changes.push({image:p.imageUrl,old:p.title,new:title});
        return {...p,title,content:title,source:base+folder+'/MỤC_LỤC.md'};
    })}));
}
const panorama=updateWalls(ZONE2_PANORAMA_EVENTS_V4,'02_Bức tường Panorama_Mùa hè tình nguyện');
const love=updateWalls(ZONE2_LOVE_EVENTS_V4,'03_Sư phạm trao yêu thương');
const stringify=x=>JSON.stringify(x,null,2);
const textOnly=Object.entries(data).flatMap(([slug,list])=>list.filter(a=>!a.media.length).map(a=>({slug,id:a.id,title:a.title,place:a.place,date:a.date})));
const report={schemaVersion:1,activities:Object.values(data).flat().length,media:Object.values(data).flat().reduce((n,a)=>n+a.media.length,0),duplicates,wallCaptionChanges:changes,textOnly};
const files={
 'Chủ đề 3/scripts/data/province-activities.js':`// Nguồn: các MỤC_LỤC.md và danh sách địa điểm người dùng cung cấp.\n// Một sự kiện có id ổn định, địa bàn hiện tại, địa danh lịch sử, ngày, nội dung,\n// trạng thái ảnh và media {src,title,sha256}; không dùng ảnh của sự kiện khác.\nconst data=${stringify(data)};\nfor(const list of Object.values(data)){for(const item of list){item.media=Object.freeze(item.media.map(Object.freeze));Object.freeze(item);}Object.freeze(list);}\nexport const PROVINCE_ACTIVITIES=Object.freeze(data);\n`,
 'Chủ đề 3/scripts/data/zone2-photo-wall-content-v4.js':`// Chú thích nguyên văn theo MỤC_LỤC.md; giữ nguyên thứ tự và tỷ lệ ảnh.\nexport const ZONE2_PANORAMA_EVENTS_V4=Object.freeze(${stringify(panorama)});\nexport const ZONE2_LOVE_EVENTS_V4=Object.freeze(${stringify(love)});\nexport const ZONE2_MEDIA_COUNTS_V4=Object.freeze({panorama:${panorama.flatMap(e=>e.photos).length},love:${love.flatMap(e=>e.photos).length}});\n`,
 'Chủ đề 3/reports/content-update-20261104.json':stringify(report)+'\n'
};
console.log(JSON.stringify({files,summary:report}));
