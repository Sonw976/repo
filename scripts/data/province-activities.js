// Nguồn chuẩn: phần “Thuộc 01_Bản đồ nhiệt_Sư phạm đi và yêu” trong sheet
// “Chủ đề 3” và các tệp MỤC_LỤC.md của bộ ảnh đi kèm.
const MAP='Tư liệu cụm 2 - Dấu chân tình nguyện/Thuộc 1_Bản đồ nhiệt_Sư phạm đi và yêu/';
const media=(folder,items)=>Object.freeze(items.map(([file,title])=>Object.freeze({src:`${MAP}${folder}/${file}`,title})));
const repeatedMedia=(folder,count,title)=>media(folder,Array.from({length:count},(_,index)=>[
  `IMG-${String(index+1).padStart(3,'0')}.jpg`,title
]));

const YEN_LANG='Đội Bình dân học vụ số tham gia phong trào “Bình dân học vụ số” và chiến dịch “45 ngày đêm ra quân hỗ trợ hoạt động chuyển đổi số” tại xã Yên Lãng, Hà Nội (10/08/2025).';
const A80='Chương trình tập huấn Tình nguyện viên phục vụ Lễ Diễu binh, diễu hành kỷ niệm 80 năm ngày Cách mạng tháng Tám thành công (19/08/1945 – 19/08/2025) và Quốc khánh nước Cộng hòa xã hội chủ nghĩa Việt Nam (02/09/1945 – 02/09/2025).';
const HA_GIANG='Đội tình nguyện dạy kỹ năng sống cho trẻ em có hoàn cảnh đặc biệt, đội hình chuyên khoa Công tác xã hội Trường Đại học Sư phạm Hà Nội ra quân chiến dịch tình nguyện Mùa hè xanh 2025 ngày 08/07/2025 tại Hà Giang (nay là tỉnh Tuyên Quang).';
const NGHE_AN='Đội Chuyển giao Kĩ thuật Nông nghiệp với công trình Vườn cây thanh niên “Ươm mầm tương lai” (22/06/2026) tại hai điểm Trường Mầm non Yên Khê, Nghệ An.';

export const PROVINCE_ACTIVITIES=Object.freeze({
  'ha-noi':Object.freeze([
    Object.freeze({
      id:'ha-noi-yen-lang-2025',type:'gallery',date:'10/08/2025',place:'xã Yên Lãng, Hà Nội',
      title:'Bình dân học vụ số tại Yên Lãng',summary:YEN_LANG,fullText:YEN_LANG,
      media:repeatedMedia('2025-08-10_Bình dân học vụ số - Yên Lãng, Hà Nội',4,YEN_LANG)
    }),
    Object.freeze({
      id:'ha-noi-a80-2025',type:'gallery',date:'2025',place:'Hà Nội',
      title:'Tập huấn tình nguyện viên phục vụ Lễ Diễu binh và Quốc khánh',summary:A80,fullText:A80,
      media:repeatedMedia('2025_Tập huấn tình nguyện viên phục vụ Lễ diễu binh và Quốc khánh',3,A80)
    }),
    Object.freeze({
      id:'ha-noi-lop-hoc-tinh-thuong',type:'article',date:'1999–2013',
      place:'Làng trẻ SOS và Làng trẻ Birla, Hà Nội',
      title:'Hơn 80 lớp học tình thương cho gần 2.000 lượt trẻ em',
      highlights:Object.freeze(['80+ LỚP HỌC','GẦN 2.000 LƯỢT TRẺ EM','25 ĐỘI TÌNH NGUYỆN']),
      summary:'Các đội Sinh viên Tình nguyện của Trường Đại học Sư phạm Hà Nội mở hơn 80 lớp học tình thương cho gần 2.000 lượt trẻ em mồ côi tại Làng trẻ SOS và Làng trẻ Birla.',
      fullText:`Trong công tác chăm sóc trẻ em mồ côi, trẻ em có hoàn cảnh đặc biệt khó khăn trên địa bàn Hà Nội, các đội Sinh viên Tình nguyện của Trường Đại học Sư phạm Hà Nội hoạt động tập trung ở Làng trẻ SOS và Làng trẻ Birla. Tại đây, liên tục từ năm 1999 đến năm 2013, sinh viên các khoa: Ngữ văn, Toán – Tin, Giáo dục Mầm non, Giáo dục Tiểu học, Tiếng Anh, Tiếng Pháp... trong ba tháng hè đã thành lập các lớp bồi dưỡng kiến thức, giúp đỡ các em giải đáp những thắc mắc trong cuộc sống, tổ chức cho trẻ sinh hoạt, vui chơi. Tùy theo chuyên ngành, các đội đã chủ động thành lập những lớp học riêng, tổ chức giảng dạy, kiểm tra đánh giá kết quả học tập cho từng em sau mỗi khoá học. Từ năm 1999 đến năm 2011, Đoàn trường đã tổ chức được 25 đội Tình nguyện với gần 800 lượt sinh viên, mở được hơn 80 lớp cho gần 2.000 lượt học sinh tại hai làng trẻ này.`
    })
  ]),
  'tuyen-quang':Object.freeze([Object.freeze({
    id:'ha-giang-mhx-2025',type:'gallery',date:'08/07/2025',
    place:'Hà Giang (nay thuộc tỉnh Tuyên Quang)',historicalPlace:'Hà Giang',
    title:'Mùa hè xanh – Dạy kỹ năng sống tại Hà Giang',summary:HA_GIANG,fullText:HA_GIANG,
    media:media('2025-07-08_Mùa hè xanh - Dạy kỹ năng sống tại Hà Giang - Tuyên Quang',[
      ['IMG-001.jpg','Đội sinh viên tình nguyện dạy kỹ năng sống cho trẻ em hoàn thành công trình thanh niên “Tủ sách nhỏ - giấc mơ lớn” tại điểm trường Bắc Sơn - Trường Tiểu học Đoàn Kết, tỉnh Hà Giang (nay là Trường Tiểu học Phú Linh, tỉnh Tuyên Quang) trong chiến dịch Mùa hè xanh 2025.'],
      ['IMG-002.jpg',HA_GIANG],['IMG-003.jpg',HA_GIANG],['IMG-004.jpg',HA_GIANG]
    ])
  })]),
  'phu-tho':Object.freeze([Object.freeze({
    id:'tan-lac-tri-thuc-tre-2026',type:'gallery',date:'2026',place:'xã Tân Lạc, tỉnh Phú Thọ',
    title:'Đội Trí thức trẻ tại Tân Lạc',
    summary:'Đội Tình nguyện Trí thức trẻ đồng hành cùng địa phương tại xã Tân Lạc, tỉnh Phú Thọ trong chiến dịch Tình nguyện hè 2026.',
    fullText:'Đội Tình nguyện Trí thức trẻ đồng hành cùng địa phương tại xã Tân Lạc, tỉnh Phú Thọ trong chiến dịch Tình nguyện hè 2026.',
    media:media('2026_Đội Trí thức trẻ - Tân Lạc, Phú Thọ',[
      ['IMG-001.jpg','Lễ xuất quân của Đội Tình nguyện Trí thức trẻ đồng hành cùng địa phương tại xã Tân Lạc, tỉnh Phú Thọ trong chiến dịch Tình nguyện hè 2026.'],
      ['IMG-002.jpg','Đội Trí thức trẻ hỗ trợ Nhân dân hoàn thiện các thủ tục tại Trung tâm Hành chính công xã Tân Lạc, tỉnh Phú Thọ trong chiến dịch Tình nguyện hè 2026.'],
      ['IMG-003.jpg','Chương trình Tiếp sức mùa thi tại xã Tân Lạc, tỉnh Phú Thọ của Đội Tình nguyện Trí thức trẻ đồng hành cùng địa phương trong chiến dịch Tình nguyện hè 2026.'],
      ['IMG-004.jpg','Đội Trí thức trẻ tổ chức hoạt động trải nghiệm nâng cao năng lực số cho các em thiếu niên, nhi đồng tại xã Tân Lạc, tỉnh Phú Thọ trong chiến dịch Tình nguyện hè 2026.']
    ])
  })]),
  'nghe-an':Object.freeze([Object.freeze({
    id:'nghe-an-uom-mam-2026',type:'gallery',date:'22/06/2026',
    place:'hai điểm Trường Mầm non Yên Khê, Nghệ An',
    title:'Vườn cây thanh niên “Ươm mầm tương lai”',summary:NGHE_AN,fullText:NGHE_AN,
    media:repeatedMedia('2026-06-22_Vườn cây thanh niên - Yên Khê, Nghệ An',4,NGHE_AN)
  })])
});
