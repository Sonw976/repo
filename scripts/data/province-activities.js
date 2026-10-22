// Nội dung công khai của bản đồ nhiệt “Sư phạm đi và yêu”.
// Không đưa dòng Excel, nơi lưu tệp và ghi chú biên tập lên giao diện.
const MAP = 'Tư liệu cụm 2 - Dấu chân tình nguyện/Thuộc 1_Bản đồ nhiệt_Sư phạm đi và yêu/';
const gallery = items => Object.freeze(items.map(([src, title]) => Object.freeze({ src: `${MAP}${src}`, title })));

export const PROVINCE_ACTIVITIES = Object.freeze({
  'ha-noi': Object.freeze([
    Object.freeze({
      id:'ha-noi-yen-lang-2025', type:'gallery', date:'10/08/2025', place:'xã Yên Lãng, Hà Nội',
      title:'Bình dân học vụ số – Chuyển đổi số tại Yên Lãng',
      summary:'Đội Bình dân học vụ số tham gia phong trào “Bình dân học vụ số” và chiến dịch “45 ngày đêm ra quân hỗ trợ hoạt động chuyển đổi số” tại xã Yên Lãng, Hà Nội (10/08/2025).',
      fullText:'Đội Bình dân học vụ số tham gia phong trào “Bình dân học vụ số” và chiến dịch “45 ngày đêm ra quân hỗ trợ hoạt động chuyển đổi số” tại xã Yên Lãng, Hà Nội (10/08/2025).',
      media:gallery([
        ['2025-08-10_Bình dân học vụ số - Chuyển đổi số tại Yên Lãng/Bình dân học vụ số - Chuyển đổi số tại Yên Lãng - 10_08_2025 - 02.jpg','Bình dân học vụ số tại Yên Lãng — Ảnh 1/3'],
        ['2025-08-10_Bình dân học vụ số - Chuyển đổi số tại Yên Lãng/Bình dân học vụ số - Chuyển đổi số tại Yên Lãng - 10_08_2025 - 03.jpg','Bình dân học vụ số tại Yên Lãng — Ảnh 2/3'],
        ['2025-08-10_Bình dân học vụ số - Chuyển đổi số tại Yên Lãng/Bình dân học vụ số - Chuyển đổi số tại Yên Lãng - 10_08_2025 - 04.jpg','Bình dân học vụ số tại Yên Lãng — Ảnh 3/3']
      ])
    }),
    Object.freeze({
      id:'ha-noi-lop-hoc-tinh-thuong', type:'article', date:'1999–2013', place:'Làng trẻ SOS và Làng trẻ Birla, Hà Nội',
      title:'Mở hơn 80 lớp học tình thương cho gần 2.000 lượt trẻ em mồ côi ở Làng trẻ em SOS & Làng trẻ Birla (Hà Nội)',
      summary:'Từ năm 1999 đến năm 2011, Đoàn trường đã tổ chức được 25 đội Tình nguyện với gần 800 lượt sinh viên, mở được hơn 80 lớp cho gần 2.000 lượt học sinh tại hai làng trẻ này.',
      fullText:`Trong công tác chăm sóc trẻ em mồ côi, trẻ em có hoàn cảnh đặc biệt khó khăn trên địa bàn Hà Nội, các đội Sinh viên Tình nguyện của Trường Đại học Sư phạm Hà Nội hoạt động tập trung ở Làng trẻ SOS và Làng trẻ Birla. Tại đây, liên tục từ năm 1999 đến năm 2013, sinh viên các khoa: Ngữ văn, Toán – Tin, Giáo dục Mầm non, Giáo dục Tiểu học, Tiếng Anh, Tiếng Pháp... trong ba tháng hè đã thành lập các lớp bồi dưỡng kiến thức, giúp đỡ các em giải đáp những thắc mắc trong cuộc sống, tổ chức cho trẻ sinh hoạt, vui chơi. Tùy theo chuyên ngành, các đội đã chủ động thành lập những lớp học riêng, tổ chức giảng dạy, kiểm tra đánh giá kết quả học tập cho từng em sau mỗi khoá học. Từ năm 1999 đến năm 2011, Đoàn trường đã tổ chức được 25 đội Tình nguyện với gần 800 lượt sinh viên, mở được hơn 80 lớp cho gần 2.000 lượt học sinh tại hai làng trẻ này.`
    }),
    Object.freeze({
      id:'ha-noi-a80-2025', type:'gallery', date:'2025', place:'Hà Nội', title:'Tập huấn tình nguyện viên phục vụ Lễ Diễu binh và Quốc khánh năm 2025',
      summary:'Chương trình tập huấn Tình nguyện viên phục vụ Lễ Diễu binh, diễu hành kỷ niệm 80 năm ngày Cách mạng tháng Tám thành công (19/08/1945 – 19/08/2025) và Quốc khánh nước CHXHVN Việt Nam (02/09/1945 – 02/09/2025).',
      fullText:'Chương trình tập huấn Tình nguyện viên phục vụ Lễ Diễu binh, diễu hành kỷ niệm 80 năm ngày Cách mạng tháng Tám thành công (19/08/1945 – 19/08/2025) và Quốc khánh nước CHXHVN Việt Nam (02/09/1945 – 02/09/2025).',
      media:gallery([
        ['2025_Tập huấn tình nguyện viên phục vụ Lễ diễu binh và Quốc khánh/Tập huấn tình nguyện viên phục vụ Lễ diễu binh và Quốc khánh - 2025 - 01.jpg','Tập huấn tình nguyện viên A80 — Ảnh 1/3'],
        ['2025_Tập huấn tình nguyện viên phục vụ Lễ diễu binh và Quốc khánh/Tập huấn tình nguyện viên phục vụ Lễ diễu binh và Quốc khánh - 2025 - 02.jpg','Tập huấn tình nguyện viên A80 — Ảnh 2/3'],
        ['2025_Tập huấn tình nguyện viên phục vụ Lễ diễu binh và Quốc khánh/Tập huấn tình nguyện viên phục vụ Lễ diễu binh và Quốc khánh - 2025 - 03.jpg','Tập huấn tình nguyện viên A80 — Ảnh 3/3']
      ])
    })
  ]),
  'tuyen-quang': Object.freeze([Object.freeze({
    id:'ha-giang-mhx-2025', type:'gallery', date:'18/07/2025', place:'Hà Giang (nay thuộc tỉnh Tuyên Quang)', historicalPlace:'Hà Giang', title:'Mùa hè xanh – Dạy kỹ năng sống tại Hà Giang',
    summary:'Đội tình nguyện dạy kĩ năng sống cho trẻ em có hoàn cảnh đặc biệt, đội hình chuyên khoa Công tác xã hội Trường Đại học Sư phạm Hà Nội tham gia chiến dịch tình nguyện Mùa hè xanh 2025 tại Hà Giang (18/07/2025).',
    fullText:`Đội tình nguyện dạy kĩ năng sống cho trẻ em có hoàn cảnh đặc biệt, đội hình chuyên khoa Công tác xã hội Trường Đại học Sư phạm Hà Nội tham gia chiến dịch tình nguyện Mùa hè xanh 2025 tại Hà Giang (18/07/2025).

Đội sinh viên tình nguyện dạy kỹ năng sống cho trẻ em hoàn thành công trình thanh niên “Tủ sách nhỏ – Giấc mơ lớn” tại điểm trường Bắc Sơn, thuộc Trường Tiểu học Đoàn Kết, tỉnh Hà Giang trong chiến dịch Mùa hè xanh 2025.`,
    media:gallery([
      ['2025-07-18_Mùa hè xanh - Dạy kỹ năng sống tại Hà Giang/Dạy kỹ năng sống tại Hà Giang - 18_07_2025 - 01.jpg','Dạy kỹ năng sống tại Hà Giang — Ảnh 1/3'],
      ['2025-07-18_Mùa hè xanh - Dạy kỹ năng sống tại Hà Giang/Dạy kỹ năng sống tại Hà Giang - 18_07_2025 - 02.jpg','Dạy kỹ năng sống tại Hà Giang — Ảnh 2/3'],
      ['2025-07-18_Mùa hè xanh - Dạy kỹ năng sống tại Hà Giang/Dạy kỹ năng sống tại Hà Giang - 18_07_2025 - 03.jpg','Dạy kỹ năng sống tại Hà Giang — Ảnh 3/3'],
      ['2025-07-18_Mùa hè xanh - Dạy kỹ năng sống tại Hà Giang/Tủ sách nhỏ - Giấc mơ lớn tại Hà Giang - 2025.jpg','Tủ sách nhỏ – Giấc mơ lớn tại Hà Giang']
    ])
  })]),
  'lang-son': Object.freeze([Object.freeze({
    id:'lang-son-bien-gioi-1979', type:'article', date:'1979', place:'Lạng Sơn',
    title:'Đội Thanh niên xung kích ĐHSP Hà Nội sẵn sàng “Đi về phương súng nổ” tại Lạng Sơn để động viên, hỗ trợ các chiến sĩ bộ đội, chuyển đến người lính biên giới những tình cảm của hậu phương',
    summary:'Đội Thanh niên xung kích ĐHSP Hà Nội sẵn sàng “Đi về phương súng nổ” tại Lạng Sơn để động viên, hỗ trợ các chiến sĩ bộ đội, chuyển đến người lính biên giới những tình cảm của hậu phương.',
    fullText:`Ngày 27.3

...Ngày mai chúng tôi phải về tuyến sau phục vụ tiểu đoàn quân y và tiểu đoàn vận tải để kết thúc chuyến đi ngắn ngủi này. Chú Vạn sẽ đi cùng đội, tiễn đội về rồi ngày kia chú sẽ lên Đồng Đăng bước vào cuộc chiến đấu mới. Buồn và nao nao trong lòng.

Chiều nay chú mang theo một cái áo... Chú bảo mình thùa khuyết lại tất cả các khuy áo. Mình và Chinh hý hoáy làm một lúc. Mình cứ băn khoăn vì thực ra các chỗ thùa khuyết chưa phải đã sờn. Cuối cùng chú Vạn nói mình mới vỡ lẽ: Hôm nào về thăm trường chú sẽ mặc cái áo này. Mỗi lần mặc đến lại nhớ chúng mày. Mình và Chinh nhìn nhau lặng người đi...

...Chú Vạn ơi, có lẽ chú chẳng biết được đâu, những ngày qua cháu đã suy nghĩ nhiều thế nào. Cháu thấy mình đã sống một cách nhỏ bé tầm thường và vô trách nhiệm trong khi những người đầu đã bạc vẫn cầm súng chiến đấu và những người chưa kịp bước vào đời đã chiến đấu và hy sinh.

May sao chuyến đi này đã cho cháu nhận thức rõ ràng hơn và sâu sắc hơn ý nghĩa cuộc sống để biết trân trọng hơn, quý giá hơn từng giây phút trôi qua. Những nấm mồ đắp vội, những dòng chữ trên bia ghi ngày tháng năm sinh của những chàng trai còn quá trẻ ngã xuống hôm nay như những tiếng chuông cảnh tỉnh chấn động mãi lòng cháu hôm nay và chắc chắn là cả những ngày mai.

Sự thực đau đớn đó hơn bất kỳ một lời giáo huấn nào có sức thuyết phục và bắt người ta phải suy nghĩ một cách nghiêm túc: làm sao cho xứng với sự hy sinh đó. Và không chỉ với những người ngã xuống hôm nay mà với cả bao lớp người đã ngã xuống hôm qua.

Sống vị kỷ là có tội với những người đã ngã xuống, là biến máu thành nước lã, là xúc phạm đến sự hy sinh xương máu của bao người...

Trích nhật ký nhà giáo Quỳnh Liên - cán bộ Phòng Công tác chính trị của ĐHSP Hà Nội 1`
  })]),
  'thanh-hoa': Object.freeze([Object.freeze({
    id:'thanh-hoa-ham-rong-1966', type:'article', date:'1966', place:'Cầu Hàm Rồng – Nam Ngạn - Thanh Hoá',
    title:'Đội TNXP chống Mỹ cứu nước (109 cán bộ, sinh viên) trực tiếp làm pháo thủ Trung đoàn 248, vận chuyển đạn, khâu vá quân trang bảo vệ Cầu Hàm Rồng – Nam Ngạn - Thanh Hoá',
    summary:'Đoàn trường Đại học Sư phạm Hà Nội thành lập “Đội Thanh niên Xung phong chống Mĩ cứu nước” gồm 109 thành viên do đồng chí Nguyễn Văn Mạo - Bí thư Đoàn trường – làm Đội trưởng.',
    fullText:'Đoàn trường Đại học Sư phạm Hà Nội thành lập “Đội Thanh niên Xung phong chống Mĩ cứu nước” gồm 109 thành viên do đồng chí Nguyễn Văn Mạo - Bí thư Đoàn trường – làm Đội trưởng. Đội đã vào khu IV cùng bộ đội, nhân dân địa phương tham gia chiến đấu và phục vụ chiến đấu tại khu vực cầu Hàm Rồng (Thanh Hóa) – một trọng điểm đánh phá ác liệt của không quân Mĩ lúc đó.'
  })]),
  'phu-tho': Object.freeze([Object.freeze({
    id:'tan-lac-tri-thuc-tre-2026', type:'gallery', date:'2026', place:'xã Tân Lạc, tỉnh Phú Thọ', title:'Đội Tri thức trẻ trong chiến dịch Mùa hè xanh (2026) tại xã Tân Lạc, tỉnh Phú Thọ',
    summary:'Tiếp sức mùa thi tại Tân Lạc.',
    fullText:'Đội Tri thức trẻ trong chiến dịch Mùa hè xanh (2026) tại xã Tân Lạc, tỉnh Phú Thọ.',
    media:gallery([['Đội Tri thức trẻ với chương trình Tiếp sức mùa thi tại xã Tân Lạc, tỉnh Phú Thọ trong chiến dịch Mùa hè xanh năm 2026.jpg','Tiếp sức mùa thi tại Tân Lạc']])
  })]),
  'nghe-an': Object.freeze([Object.freeze({
    id:'nghe-an-uom-mam-2026', type:'gallery', date:'22/06/2026', place:'2 điểm Trường Mầm non Yên Khê - Nghệ An', title:'Đội Chuyển giao Kĩ thuật Nông nghiệp với công trình Vườn cây thanh niên “Ươm mầm tương lai”',
    summary:'Công trình vườn cây thanh niên “Ươm mầm tương lai”.',
    fullText:'Đội Chuyển giao Kĩ thuật Nông nghiệp với công trình Vườn cây thanh niên “Ươm mầm tương lai” (22/06/2026) tại 2 điểm Trường Mầm non Yên Khê - Nghệ An.',
    media:gallery([['Đội chuyển giao kĩ thuật nông nghiệp với công trình vườn cây thanh niên .jpg','Vườn cây thanh niên “Ươm mầm tương lai”']])
  })])
});
