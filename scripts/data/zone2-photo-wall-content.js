const PANORAMA_ROOT = 'Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/';
const LOVE_ROOT = 'Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/';

const DATA = {
  "pan": [
    {
      "year": "2022",
      "group": "Tập huấn - Tổng kết chiến dịch",
      "files": [
        "Hội nghị tổng kết chiến dịch Thanh niên tình nguyện hè năm 2022.jpg",
        "Lớp tập huấn chiến dịch Mùa hè Xanh 2022.jpg"
      ]
    },
    {
      "year": "2022",
      "group": "Dạy học - Công nghệ",
      "files": [
        "Buổi hỗ trợ đầu tiên của đội Tình nguyện hỗ trợ công nghệ thông tin thuộc chiến dịch Mùa hè Xanh năm 2022.jpg",
        "Tuần học đầu tiên của đội Dạy học tiếng Anh cho sinh viên thuộc chiến dịch Mùa hè xanh 2022.jpg"
      ]
    },
    {
      "year": "2022",
      "group": "Khoa học - Môi trường",
      "files": [
        "Chiến dịch Mùa hè Xanh năm 2022 của Đội chuyển giao ứng dụng khoa học kĩ thuật.jpg",
        "Đội Vì Môi Trường thực hiện hoạt động làm sạch Công viên Hồ Điều Hòa thuộc chiến dịch Mùa hè Xanh năm 2022.jpg"
      ]
    },
    {
      "year": "2023",
      "group": "Hỗ trợ định danh điện tử",
      "files": [
        "Đội Tình nguyện Hỗ trợ Kích hoạt định danh điện tử kết hợp cùng công an phường Dịch Vọng Hậu cấp CCCD gắn chip điện tử thuộc chiến dịch Mùa hè Xanh năm 2023.jpg"
      ]
    },
    {
      "year": "2023",
      "group": "Chủ nhật Xanh - Tri ân liệt sĩ",
      "files": [
        "Chương trình _Chủ nhật xanh_ của đội Vì Môi Trường năm 2023.jpg",
        "Đội Vì Môi trường cùng Đoàn Thanh niên Phường Dịch Vọng Hậu dọn dẹp cảnh quan xung quanh Nhà bia tưởng niệm liệt sĩ phường Dịch Vọng Hậu năm 2023.jpg"
      ]
    },
    {
      "year": "2024",
      "group": "Ra quân - Tri thức trẻ",
      "files": [
        "Lễ ra quân chiến dịch Thanh niên Tình nguyện hè năm 2024.jpg",
        "Ngày đầu tiên của đội Tri thức trẻ Tình nguyện tại Thanh Hóa thuộc chiến dịch Mùa hè xanh 2024.jpg",
        "Đội hình Trí thức trẻ Tình nguyện hỗ trợ xây dựng nông thôn mới thuộc chiến dịch Mùa hè Xanh năm 2024.jpg"
      ]
    },
    {
      "year": "2024",
      "group": "Dạy học - Thư viện",
      "files": [
        "Đội Hỗ trợ dạy học tiếng Anh cho sinh viên tổ chức buổi học online thuộc chiến dịch Mùa hè xanh năm 2024.jpg",
        "Đội Tình nguyện Hỗ trợ Thư viện thực hiện chiến dịch Mùa hè xanh năm 2024.jpg"
      ]
    },
    {
      "year": "2024",
      "group": "Chăm sóc cộng đồng",
      "files": [
        "Đội Tình Nguyện chăm sóc sức khỏe tinh thần cho người cao tuổi Trường ĐHSP Hà Nội trong chiến dịch Mùa hè xanh 2024 tại Viện dưỡng lão ALH.jpg"
      ]
    },
    {
      "year": "2024",
      "group": "Môi trường - Chủ nhật Xanh",
      "files": [
        "Chương trình Chủ nhật xanh lần thứ 3 kết hợp dọn dẹp nhà bia tưởng niệm liệt sỹ nằm trong chiến dịch Mùa hè xanh 2024 của Đội Vì Môi Trường.jpg",
        "Chương trình Trao gửi yêu thương tại Bệnh viện E nhân ngày Quốc tế Thiếu nhi 1_6 bằng số tiền thu về từ chương trình _Đổi giấy lấy cây_ năm 2024 của Đội Vì Môi Trường.jpg",
        "Chương trình ra quân hưởng ứng ngày chủ nhật xanh của  Đội Tình nguyện dạy kĩ năng sống cho trẻ em tại Lạng Sơn thuộc chiến dịch Mùa hè Xanh năm 2024.jpg",
        "Chương trình “Thu hồi pin cũ - Bảo vệ trái đất xanh” năm 2024 do Đội Vì Môi Trường và nhãn hàng Cocoon tổ chức.jpg"
      ]
    },
    {
      "year": "2025",
      "group": "Ra quân Mùa hè Xanh",
      "files": [
        "Lễ ra quân Chiến dịch Thanh niên Tình nguyện hè 2025.jpg",
        "Lễ ra quân Chiến dịch Thanh niên Tình nguyện hè năm 2025.jpg",
        "Ngày ra quân chiến dịch tình nguyện Mùa hè xanh 2025(1).jpg",
        "Ngày ra quân chiến dịch tình nguyện Mùa hè xanh 2025.jpg",
        "Trường Đại học Sư phạm Hà Nội tham gia Lễ xuất quân Chiến dịch Sinh viên tình nguyện _Mùa hè xanh_ năm 2025 tại TP Hà Nội(1).jpg",
        "Trường Đại học Sư phạm Hà Nội tham gia Lễ xuất quân Chiến dịch Sinh viên tình nguyện _Mùa hè xanh_ năm 2025 tại TP Hà Nội.jpg"
      ]
    },
    {
      "year": "2025",
      "group": "Giao thông Xanh",
      "files": [
        "Chiến dịch Thanh niên Tình nguyện hè năm 2025 của Đội Giao thông Xanh.jpg"
      ]
    },
    {
      "year": "2025",
      "group": "Bình dân học vụ số",
      "files": [
        "Chiến dịch “45 ngày đêm ra quân hỗ trợ hoạt động chuyển đổi số trong giai đoạn đầu vận hành mô hình chính quyền địa phương hai cấp” của Đội Bình dân học vụ số năm 2025.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Ra quân Mùa hè Xanh",
      "files": [
        "Trường Đại học Sư phạm Hà Nội tham gia Lễ xuất quân Chiến dịch Sinh viên tình nguyện Mùa hè xanh năm 2026 do Thành đoàn - Hội Sinh viên thành phố Hà Nội tổ chức.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Tiếp sức thi cử",
      "files": [
        "Chương trình Tiếp sức mùa thi của Đội Trí thức trẻ tại xã Tân Lạc, tỉnh Phú Thọ thuộc chiến dịch Mùa hè xanh năm 2026.jpg",
        "Đội Tiếp sức đến trường hỗ trọ Kỳ thi Đánh giá Năng lực SPT đợt 1 Trường Đại học Sư phạm Hà Nội trong chiến dịch Mùa hè Xanh 2026.jpg",
        "Đội Tiếp sức đến trường hỗ trợ Kỳ thi Năng khiếu tuyển sinh đại học hệ chính quy Trường Đại học Sư phạm Hà Nội trong chiến dịch Mùa hè Xanh năm 2026.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Hành chính công Tân Lạc",
      "files": [
        "Đội Tri thức trẻ hỗ trợ hành chính công và tích hợp Sổ tay điện tử VNeID tại xã Tân Lạc, Phú Thọ năm 2026.jpg",
        "Đội Trí thức trẻ hỗ trợ Nhân dân hoàn thiện các thủ tục tại Trung tâm Hành chính công xã Tân Lạc, tỉnh Phú Thọ trong chiến dịch Mùa hè Xanh 2026.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Bình dân học vụ số",
      "files": [
        "Hành trình làn tỏa tri thức, nâng cao kỹ năng số cho cộng đồng của Đội Bình dân học vụ số trong chiến dịch Mùa hè Xanh năm 2026.jpg",
        "Đội Bình dân học vụ số  giảng dạy kỹ năng số dành cho học sinh tại Ninh Bình thuộc chiến dịch _Mùa hè xanh_ 2026.png",
        "Đội Bình dân học vụ số hỗ trợ tập huấn kỹ năng số trên Đoàn phường Cầu Giấy trong chiến dịch Mùa hè Xanh năm 2026.jpg",
        "Đội Bình dân học vụ số với chuyến đi đến Ninh Bình trong chiến dịch Mùa hè xanh năm 2026.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Dạy học - Trao sách tại Ninh Bình",
      "files": [
        "English Festival 2026 cho học sinh tiền tiểu học Trường Tiểu học Nguyễn Tất Thành tại Phân hiệu HNUE Ninh Bình.jpg",
        "Hành trình Gieo tri thức - Lan tỏa yêu thương của Đội Tình nguyện dạy học cho học sinh Tiểu học tại Ninh Bình nằm trong chiến dịch Mùa hè Xanh năm 2026.jpg",
        "Đoàn Thanh niên Trường ĐHSP Hà Nội trao tặng sách cho học sinh Tiểu học và THCS Châu Sơn, Ninh Bình năm 2026.jpg",
        "Đội tình nguyện dạy Tiếng Anh và kỹ năng sống cho trẻ em tại Ninh Bình trong chiến dịch _Mùa hè xanh_ 2026.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Văn hóa - Thư viện",
      "files": [
        "Sinh viên Trường Đại học Sư phạm Hà Nôi tham gia biểu diễn trong khối hợp xướng phục vụ Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ XIII năm 2026.jpg",
        "Đội Tình nguyện Hỗ trợ Thư Viện tiếp đón đoàn tham quan đến từ các trường Phổ thông Dân tộc bán trú tỉnh Lào Cai trong chiến dịch Mùa hè Xanh năm 2026.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Môi trường - Chủ nhật Xanh",
      "files": [
        "Chương trình _Chủ nhật Xanh_ lần thứ 3 năm 2026 do Đội Vì Môi Trường tổ chức tại Công viên Hồ điều hòa Mai Dịch.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Tri ân - An sinh",
      "files": [
        "Chương trình Thắp nến tri ân các Anh hùng liệt sĩ tại Nghĩa trang Mai Dịch của Đoàn Thanh niên trường Đại học Sư phạm Hà Nội năm 2026.jpg",
        "Chương trình Trao gửi yêu thương - Kết nối nụ cười cho bệnh nhi nhân ngày Quốc tế Thiếu nhi năm 2026.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Vườn cây Thanh niên Ươm mầm tương lai",
      "files": [
        "Công trình Vườn cây Thanh niên “Ươm mầm tương lai” 2026 tại 2 điểm Trường Mầm non Yên Khê, Nghệ An do Đội Chuyển giao Kỹ thuật Nông nghiệp Trường ĐHSP Hà Nội thực hiện(1).jpg",
        "Công trình Vườn cây Thanh niên “Ươm mầm tương lai” 2026 tại 2 điểm Trường Mầm non Yên Khê, Nghệ An do Đội Chuyển giao Kỹ thuật Nông nghiệp Trường ĐHSP Hà Nội thực hiện.jpg"
      ]
    }
  ],
  "love": [
    {
      "year": "2023",
      "group": "Hoạt động tình nguyện",
      "files": [
        "CLB Dạy học tình nguyện trường ĐHSP Hà Nội tổ chức Giải Bóng đá Thanh niên Tình nguyện năm 2023.jpg",
        "Đội Vì Môi trường trao tặng 15 suất quà cho những bệnh nhân có hoàn cảnh khó khăn tại bệnh viện E, Hà Nội năm 2023.jpg"
      ]
    },
    {
      "year": "2024",
      "group": "Hiến máu tình nguyện",
      "files": [
        "Chương trình hiến máu Sắc vàng hoàng yến 2024.jpg",
        "Sinh viên Trường ĐHSP Hà Nội tham gia Ngày hội hiến máu _Mùa hè nhân ái_ 2024.jpg"
      ]
    },
    {
      "year": "2024",
      "group": "Hỗ trợ học sinh - Sinh viên",
      "files": [
        "Trường ĐHSP Hà Nội trao hỗ trợ từ Quỹ đồng hành với học sinh, sinh viên vùng khó khăn trong Ngày hội Văn hoá các Dân tộc Việt Nam 2024.jpg",
        "Trường ĐHSP Hà Nội trao quà Tết cho học sinh, sinh viên có hoàn cảnh khó khăn, nỗ lực vươn lên trong học tập trong Ngày Tết học sinh, sinh viên - Xuân Giáp Thìn 2024.jpg"
      ]
    },
    {
      "year": "2025",
      "group": "Hiến máu tình nguyện",
      "files": [
        "Chương trình hiến máu Sắc vàng hoàng yến 2025(1).jpg",
        "Chương trình hiến máu Sắc vàng hoàng yến 2025.jpg",
        "Sinh viên trường ĐHSP Hà Nội tham gia hoạt động tại Điểm hiến máu Hướng Dương năm 2025.jpg"
      ]
    },
    {
      "year": "2025",
      "group": "Thiện nguyện tại bệnh viện",
      "files": [
        "Hội Sinh viên trường ĐHSP Hà Nội thăm hỏi, trao quà cho bệnh nhân tại Bệnh viện E - Xuân Ất Tỵ 2025(1).jpg",
        "Hội Sinh viên trường ĐHSP Hà Nội thăm hỏi, trao quà cho bệnh nhân tại Bệnh viện E - Xuân Ất Tỵ 2025.jpg",
        "Top 21 Miss HNUE 2025 hỗ trợ phát cháo từ thiện cho bệnh nhân tại Viện Huyết học - Truyền máu Trung ương(1).jpg",
        "Top 21 Miss HNUE 2025 hỗ trợ phát cháo từ thiện cho bệnh nhân tại Viện Huyết học - Truyền máu Trung ương.jpg",
        "Đội sinh viên tình nguyện Khoa Công tác xã hội – Trường Đại học Sư phạm Hà Nội hỗ trợ tổ chức buổi sinh hoạt câu lạc bộ cha mẹ trẻ bại não tại Bệnh viện Nhi Trung ương năm 2025(1).jpg",
        "Đội sinh viên tình nguyện Khoa Công tác xã hội – Trường Đại học Sư phạm Hà Nội hỗ trợ tổ chức buổi sinh hoạt câu lạc bộ cha mẹ trẻ bại não tại Bệnh viện Nhi Trung ương năm 2025.jpg"
      ]
    },
    {
      "year": "2025",
      "group": "Quà Tết - Quỹ đồng hành",
      "files": [
        "Trường ĐHSP Hà Nội trao quà Tết cho học sinh, sinh viên có hoàn cảnh khó khăn, nỗ lực vươn lên trong học tập trong Ngày Tết học sinh, sinh viên - Xuân Ất Tỵ 2025.jpg",
        "Trường ĐHSP Hà Nội tổ chức ngày Hội Quỹ Đồng hành với học sinh, sinh viên Trường Đại học Sư phạm Hà Nội – “Hành trình Xanh” năm 2025.png"
      ]
    },
    {
      "year": "2025",
      "group": "Tủ sách nhỏ - Giấc mơ lớn",
      "files": [
        "Đội sinh viên tình nguyện dạy kỹ năng sống cho trẻ em trao tặng công trình thanh niên “Tủ sách nhỏ - giấc mơ lớn” tại Tuyên Quang năm 2025(1).jpg",
        "Đội sinh viên tình nguyện dạy kỹ năng sống cho trẻ em trao tặng công trình thanh niên “Tủ sách nhỏ - giấc mơ lớn” tại Tuyên Quang năm 2025.jpg"
      ]
    },
    {
      "year": "2025",
      "group": "Hỗ trợ khắc phục bão lũ",
      "files": [
        "Đoàn Thanh niên Trường ĐHSP Hà NộiHỗ trợ sinh viên khắc phục hậu quả bão lũ tại khu vực miền Trung, Tây Nguyên năm 2025(1).jpg",
        "Đoàn Thanh niên Trường ĐHSP Hà NộiHỗ trợ sinh viên khắc phục hậu quả bão lũ tại khu vực miền Trung, Tây Nguyên năm 2025.jpg"
      ]
    },
    {
      "year": "2025",
      "group": "Môi trường - Chủ nhật Xanh",
      "files": [
        "Đội Vì Môi Trường tổ chức hoạt động _Chủ nhật Xanh” 2025, dọn dẹp vệ sinh, chăm sóc cảnh quan Đài tưởng niệm liệt sĩ phường Cầu Giấy.jpg"
      ]
    },
    {
      "year": "2025",
      "group": "Kỷ niệm Cách mạng tháng Tám - Quốc khánh",
      "files": [
        "400 tình nguyện viên Trường ĐHSP Hà Nội tham gia hỗ trợ Chương trình kỷ niệm 80 năm Cách mạng tháng Tám thành công (19_8_1945 - 19_8_2025) và Quốc khánh nước CHXHCN Việt Nam (2_9_1945 - 2_9_2025).jpg",
        "Sinh viên Trường ĐHSP Hà Nội tham gia hỗ trợ Chương trình kỷ niệm 80 năm Cách mạng tháng Tám thành công (19_8_1945 - 19_8_2025) và Quốc khánh nước CHXHCN Việt Nam (2_9_1945 - 2_9_2025)(1).jpg",
        "Sinh viên Trường ĐHSP Hà Nội tham gia hỗ trợ Chương trình kỷ niệm 80 năm Cách mạng tháng Tám thành công (19_8_1945 - 19_8_2025) và Quốc khánh nước CHXHCN Việt Nam (2_9_1945 - 2_9_2025).jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Hiến máu tình nguyện",
      "files": [
        "Chương trình hiến máu Sắc vàng hoàng yến 2026.jpg",
        "Lễ ra quân chương trình hiến máu Sắc vàng hoàng yến 2026.jpg",
        "Sinh viên Trường ĐHSP Hà Nội tại Ngày hội hiến máu _Giọt hồng tri ân_ 2026.jpg",
        "Sinh viên Trường ĐHSP Hà Nội tại Ngày hội hiến máu _Mùa hè nhân ái_ 2026, tham gia hiến máu tình nguyện.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Học bổng - Quà Tết",
      "files": [
        "Trường ĐHSP Hà Nội trao 50 suất quà Tết cho học sinh, sinh viên có hoàn cảnh khó khăn, nỗ lực vươn lên trong học tập trong Ngày Tết học sinh, sinh viên - Xuân Bính Ngọ 2026.jpg",
        "Trường ĐHSP Hà Nội trao học bổng đồng hành với học sinh, sinh viên vùng khó khăn trong Ngày hội Văn hoá các Dân tộc Việt Nam 2026(1).jpg",
        "Trường ĐHSP Hà Nội trao học bổng đồng hành với học sinh, sinh viên vùng khó khăn trong Ngày hội Văn hoá các Dân tộc Việt Nam 2026.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Chuyến xe về quê đón Tết Bính Ngọ",
      "files": [
        "Đoàn Thanh niên Trường ĐHSP Hà Nội, tổ chức “Chuyến xe về quê đón Tết Bính Ngọ 2026”, hỗ trợ sinh viên về quê đón Tết(1).jpg",
        "Đoàn Thanh niên Trường ĐHSP Hà Nội, tổ chức “Chuyến xe về quê đón Tết Bính Ngọ 2026”, hỗ trợ sinh viên về quê đón Tết(2).jpg",
        "Đoàn Thanh niên Trường ĐHSP Hà Nội, tổ chức “Chuyến xe về quê đón Tết Bính Ngọ 2026”, hỗ trợ sinh viên về quê đón Tết.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Trao tặng sách Châu Sơn",
      "files": [
        "Đoàn Thanh niên Trường Đại học Sư phạm Hà Nội trao tặng sách cho học sinh Trường TH&THCS Châu Sơn, phường Châu Sơn, tỉnh Ninh Bình năm 2026(1).jpg",
        "Đoàn Thanh niên Trường Đại học Sư phạm Hà Nội trao tặng sách cho học sinh Trường TH&THCS Châu Sơn, phường Châu Sơn, tỉnh Ninh Bình năm 2026.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Gửi nắng lên non",
      "files": [
        " CLB Thanh niên Xung kích Khoa Ngữ văn tổ chức chương trình thiện nguyện _Gửi nắng lên non_ 2026 tại Trường Tiểu học Lũng Luông, xã Thần Sa, tỉnh Thái Nguyên.jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Tri ân người có công",
      "files": [
        "Chương trình Viết tiếp lời tri ân kỷ niệm 79 năm Ngày Thương binh - Liệt sĩ 27_7_2026.jpg",
        "Đoàn Thanh niên Trường ĐHSP Hà Nội thăm hỏi và tặng quà gia đình người có công với cách mạng tại Ninh Bình nhân dịp kỉ niệm 79 năm Ngày Thương binh - Liệt sĩ (27_7_1947 - 27_7_2026).jpg"
      ]
    },
    {
      "year": "2026",
      "group": "Môi trường - Chủ nhật Xanh",
      "files": [
        "Đội Vì Môi Trường tổ chức hoạt động _Chủ nhật Xanh lần thứ III” năm 2026.jpg",
        "Đội Vì Môi Trường tổ chức hoạt động _Chủ nhật Xanh” chào mừng Xuân Bính Ngọ 2026.jpg",
        "Đội Vì Môi trường tổ chức chương trình _Đổi giấy lấy cây_ và trao quà cho các em nhỏ tại bệnh viện E nhân Ngày Quốc tế Thiếu nhi 1_6_2026.jpg"
      ]
    },
    {
      "year": "Không xác định năm",
      "group": "Hiến máu Hướng Dương",
      "files": [
        "Sinh viên tham gia hoạt động tại Điểm hiến máu Hướng Dương.jpg"
      ]
    },
    {
      "year": "Không xác định năm",
      "group": "Thăm hỏi bệnh nhân Viện Huyết học",
      "files": [
        "Đoàn Thanh niên trường ĐHSP Hà Nội đến thăm hỏi bệnh nhân tại Viện Huyết học - Truyền máu Trung ương.jpg"
      ]
    },
    {
      "year": "Không xác định năm",
      "group": "Trao quà bệnh nhi tại Bệnh viện E",
      "files": [
        "Đội Sinh viên tình nguyện trường ĐHSP Hà Nội trao quà cho bệnh nhi tại Bệnh viện E(1).jpg",
        "Đội Sinh viên tình nguyện trường ĐHSP Hà Nội trao quà cho bệnh nhi tại Bệnh viện E.jpg"
      ]
    },
    {
      "year": "Không xác định năm",
      "group": "Lễ tiếp nhận xe hỗ trợ sinh viên",
      "files": [
        "Lễ tiếp nhận 15 xe máy điện, 150 xe đạp hỗ trợ sinh viên(1).jpg",
        "Lễ tiếp nhận 15 xe máy điện, 150 xe đạp hỗ trợ sinh viên.jpg"
      ]
    },
    {
      "year": "Không xác định năm",
      "group": "Clean up Việt Nam",
      "files": [
        "Đội Vì Môi trường tham gia chiến dịch Clean up Việt Nam lần thứ 8.jpg"
      ]
    }
  ],
  "titleMap": {
    "Tập huấn - Tổng kết chiến dịch": "TẬP HUẤN · TỔNG KẾT CHIẾN DỊCH",
    "Dạy học - Công nghệ": "DẠY HỌC · HỖ TRỢ CÔNG NGHỆ",
    "Khoa học - Môi trường": "KHOA HỌC · HÀNH ĐỘNG XANH",
    "Hỗ trợ định danh điện tử": "HỖ TRỢ ĐỊNH DANH ĐIỆN TỬ",
    "Chủ nhật Xanh - Tri ân liệt sĩ": "CHỦ NHẬT XANH · TRI ÂN LIỆT SĨ",
    "Ra quân - Tri thức trẻ": "RA QUÂN · TRI THỨC TRẺ",
    "Dạy học - Thư viện": "DẠY HỌC · HỖ TRỢ THƯ VIỆN",
    "Chăm sóc cộng đồng": "CHĂM SÓC CỘNG ĐỒNG",
    "Môi trường - Chủ nhật Xanh": "MÔI TRƯỜNG · CHỦ NHẬT XANH",
    "Ra quân Mùa hè Xanh": "RA QUÂN MÙA HÈ XANH",
    "Giao thông Xanh": "GIAO THÔNG XANH",
    "Bình dân học vụ số": "BÌNH DÂN HỌC VỤ SỐ",
    "Tiếp sức thi cử": "TIẾP SỨC THI CỬ",
    "Hành chính công Tân Lạc": "HỖ TRỢ HÀNH CHÍNH CÔNG",
    "Dạy học - Trao sách tại Ninh Bình": "DẠY HỌC · TRAO TẶNG SÁCH",
    "Văn hóa - Thư viện": "VĂN HÓA · THƯ VIỆN",
    "Tri ân - An sinh": "TRI ÂN · AN SINH XÃ HỘI",
    "Vườn cây Thanh niên Ươm mầm tương lai": "VƯỜN CÂY “ƯƠM MẦM TƯƠNG LAI”",
    "Hoạt động tình nguyện": "HOẠT ĐỘNG TÌNH NGUYỆN",
    "Hiến máu tình nguyện": "HIẾN MÁU TÌNH NGUYỆN",
    "Hỗ trợ học sinh - Sinh viên": "ĐỒNG HÀNH CÙNG HỌC SINH, SINH VIÊN",
    "Thiện nguyện tại bệnh viện": "ĐỒNG HÀNH CÙNG NGƯỜI BỆNH",
    "Quà Tết - Quỹ đồng hành": "QUÀ TẾT · QUỸ ĐỒNG HÀNH",
    "Tủ sách nhỏ - Giấc mơ lớn": "TỦ SÁCH NHỎ · GIẤC MƠ LỚN",
    "Hỗ trợ khắc phục bão lũ": "CHUNG TAY KHẮC PHỤC BÃO LŨ",
    "Kỷ niệm Cách mạng tháng Tám - Quốc khánh": "TỰ HÀO TRUYỀN THỐNG DÂN TỘC",
    "Học bổng - Quà Tết": "HỌC BỔNG · QUÀ TẾT",
    "Chuyến xe về quê đón Tết Bính Ngọ": "CHUYẾN XE VỀ QUÊ ĐÓN TẾT",
    "Trao tặng sách Châu Sơn": "TRAO TẶNG SÁCH · CHẮP CÁNH ƯỚC MƠ",
    "Gửi nắng lên non": "GỬI NẮNG LÊN NON",
    "Tri ân người có công": "TRI ÂN NGƯỜI CÓ CÔNG",
    "Hiến máu Hướng Dương": "HIẾN MÁU HƯỚNG DƯƠNG",
    "Thăm hỏi bệnh nhân Viện Huyết học": "THĂM HỎI NGƯỜI BỆNH",
    "Trao quà bệnh nhi tại Bệnh viện E": "TRAO QUÀ BỆNH NHI",
    "Lễ tiếp nhận xe hỗ trợ sinh viên": "PHƯƠNG TIỆN ĐỒNG HÀNH",
    "Clean up Việt Nam": "CLEAN UP VIỆT NAM"
  }
};

// Biên tập lại theo nội dung trưng bày, độc lập với cách chia thư mục nguồn.
// Mỗi mục nguồn vẫn giữ nguyên đường dẫn vật lý để không làm ảnh hưởng kho tư liệu.
const PANORAMA_GROUP_PLAN = Object.freeze([
    { year: '2022', title: 'TẬP HUẤN · TỔNG KẾT CHIẾN DỊCH', sources: ['Tập huấn - Tổng kết chiến dịch'] },
    { year: '2022', title: 'DẠY HỌC · HỖ TRỢ CÔNG NGHỆ', sources: ['Dạy học - Công nghệ'] },
    { year: '2022', title: 'KHOA HỌC KĨ THUẬT · VÌ MÔI TRƯỜNG', sources: ['Khoa học - Môi trường'] },
    { year: '2023', title: 'HỖ TRỢ KÍCH HOẠT ĐỊNH DANH ĐIỆN TỬ', sources: ['Hỗ trợ định danh điện tử'] },
    { year: '2023', title: 'CHỦ NHẬT XANH · DỌN DẸP CẢNH QUAN', sources: ['Chủ nhật Xanh - Tri ân liệt sĩ'] },
    { year: '2024', title: 'RA QUÂN · TRI THỨC TRẺ TÌNH NGUYỆN', sources: ['Ra quân - Tri thức trẻ'] },
    { year: '2024', title: 'DẠY HỌC · HỖ TRỢ THƯ VIỆN · CHĂM SÓC SỨC KHỎE', sources: ['Dạy học - Thư viện', 'Chăm sóc cộng đồng'] },
    { year: '2024', title: 'CHỦ NHẬT XANH', sources: [{ source: 'Môi trường - Chủ nhật Xanh', includes: ['Chủ nhật xanh lần', 'ra quân hưởng ứng ngày chủ nhật xanh'] }] },
    { year: '2024', title: 'TRAO GỬI YÊU THƯƠNG · ĐỔI GIẤY LẤY CÂY', sources: [{ source: 'Môi trường - Chủ nhật Xanh', includes: ['Trao gửi yêu thương'] }] },
    { year: '2024', title: 'THU HỒI PIN CŨ · BẢO VỆ TRÁI ĐẤT XANH', sources: [{ source: 'Môi trường - Chủ nhật Xanh', includes: ['Thu hồi pin cũ'] }] },
    { year: '2025', title: 'LỄ RA QUÂN · LỄ XUẤT QUÂN · NGÀY RA QUÂN', sources: ['Ra quân Mùa hè Xanh'] },
    { year: '2025', title: 'GIAO THÔNG XANH · BÌNH DÂN HỌC VỤ SỐ', sources: ['Giao thông Xanh', 'Bình dân học vụ số'] },
    { year: '2026', title: 'LỄ XUẤT QUÂN · TIẾP SỨC MÙA THI · TIẾP SỨC ĐẾN TRƯỜNG', sources: ['Ra quân Mùa hè Xanh', 'Tiếp sức thi cử'] },
    { year: '2026', title: 'TRÍ THỨC TRẺ · HÀNH CHÍNH CÔNG · BÌNH DÂN HỌC VỤ SỐ', sources: ['Hành chính công Tân Lạc', 'Bình dân học vụ số'] },
    { year: '2026', title: 'GIEO TRI THỨC · TRAO TẶNG SÁCH · DẠY TIẾNG ANH', sources: ['Dạy học - Trao sách tại Ninh Bình'] },
    { year: '2026', title: 'BIỂU DIỄN · HỖ TRỢ THƯ VIỆN', sources: ['Văn hóa - Thư viện'] },
    { year: '2026', title: 'CHỦ NHẬT XANH · THẮP NẾN TRI ÂN · TRAO GỬI YÊU THƯƠNG', sources: ['Môi trường - Chủ nhật Xanh', 'Tri ân - An sinh'] },
    { year: '2026', title: 'VƯỜN CÂY “ƯƠM MẦM TƯƠNG LAI”', sources: ['Vườn cây Thanh niên Ươm mầm tương lai'] }
]);

const LOVE_GROUP_PLAN = Object.freeze([
    { year: '2023', title: 'GIẢI BÓNG ĐÁ THANH NIÊN TÌNH NGUYỆN', sources: [{ source: 'Hoạt động tình nguyện', includes: ['Giải Bóng đá'] }] },
    { year: '2023', title: 'TRAO TẶNG 15 SUẤT QUÀ CHO BỆNH NHÂN', sources: [{ source: 'Hoạt động tình nguyện', includes: ['trao tặng 15 suất quà'] }] },
    { year: '2024', title: 'HIẾN MÁU · MÙA HÈ NHÂN ÁI', sources: ['Hiến máu tình nguyện'] },
    { year: '2024', title: 'QUỸ ĐỒNG HÀNH · QUÀ TẾT CHO HỌC SINH, SINH VIÊN', sources: ['Hỗ trợ học sinh - Sinh viên'] },
    { year: '2025', title: 'HIẾN MÁU · SẮC VÀNG HOÀNG YẾN · HƯỚNG DƯƠNG', sources: ['Hiến máu tình nguyện'] },
    { year: '2025', title: 'THĂM HỎI · TRAO QUÀ · PHÁT CHÁO CHO BỆNH NHÂN', sources: ['Thiện nguyện tại bệnh viện'] },
    { year: '2025', title: 'QUÀ TẾT · QUỸ ĐỒNG HÀNH', sources: ['Quà Tết - Quỹ đồng hành'] },
    { year: '2025', title: 'TỦ SÁCH NHỎ · GIẤC MƠ LỚN', sources: ['Tủ sách nhỏ - Giấc mơ lớn'] },
    { year: '2025', title: 'SINH VIÊN KHẮC PHỤC HẬU QUẢ BÃO LŨ', sources: ['Hỗ trợ khắc phục bão lũ'] },
    { year: '2025', title: 'CHỦ NHẬT XANH · CHĂM SÓC CẢNH QUAN', sources: ['Môi trường - Chủ nhật Xanh'] },
    { year: '2025', title: 'CÁCH MẠNG THÁNG TÁM · QUỐC KHÁNH', sources: ['Kỷ niệm Cách mạng tháng Tám - Quốc khánh'] },
    { year: '2026', title: 'HIẾN MÁU · SẮC VÀNG HOÀNG YẾN · GIỌT HỒNG TRI ÂN · MÙA HÈ NHÂN ÁI', sources: ['Hiến máu tình nguyện'] },
    { year: '2026', title: 'HỌC BỔNG · QUÀ TẾT · CHUYẾN XE VỀ QUÊ ĐÓN TẾT', sources: ['Học bổng - Quà Tết', 'Chuyến xe về quê đón Tết Bính Ngọ'] },
    { year: '2026', title: 'TRAO TẶNG SÁCH · GỬI NẮNG LÊN NON', sources: ['Trao tặng sách Châu Sơn', 'Gửi nắng lên non'] },
    { year: '2026', title: 'TRI ÂN NGƯỜI CÓ CÔNG', sources: ['Tri ân người có công'] },
    { year: '2026', title: 'CHỦ NHẬT XANH · ĐỔI GIẤY LẤY CÂY', sources: ['Môi trường - Chủ nhật Xanh'] },
    { year: 'Không xác định năm', title: 'HIẾN MÁU · THĂM HỎI BỆNH NHÂN · TRAO QUÀ CHO BỆNH NHI', sources: ['Hiến máu Hướng Dương', 'Thăm hỏi bệnh nhân Viện Huyết học', 'Trao quà bệnh nhi tại Bệnh viện E'] },
    { year: 'Không xác định năm', title: 'XE MÁY ĐIỆN · XE ĐẠP HỖ TRỢ SINH VIÊN · CLEAN UP VIỆT NAM', sources: ['Lễ tiếp nhận xe hỗ trợ sinh viên', 'Clean up Việt Nam'] }
]);

function curateRecords(records, plan) {
    return plan.map(item => ({
        year: item.year,
        displayTitle: item.title,
        files: item.sources.flatMap(sourceSelector => {
            const sourceGroup = typeof sourceSelector === 'string' ? sourceSelector : sourceSelector.source;
            const source = records.find(record => record.year === item.year && record.group === sourceGroup);
            if (!source) {
                console.warn(`[Cụm 2] Không tìm thấy nhóm nguồn: ${item.year}/${sourceGroup}`);
                return [];
            }
            const includes = typeof sourceSelector === 'string' ? [] : sourceSelector.includes || [];
            const selectedFiles = includes.length
                ? source.files.filter(file => includes.some(fragment => file.toLocaleLowerCase('vi-VN').includes(fragment.toLocaleLowerCase('vi-VN'))))
                : source.files;
            return selectedFiles.map(file => ({ file, sourceGroup }));
        })
    }));
}

// Tỉ lệ ảnh được đọc từ chính file nguồn để dựng mesh đúng khổ ngang/dọc.
const IMAGE_ASPECTS = Object.freeze(
{
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2025/Giao thông Xanh/Chiến dịch Thanh niên Tình nguyện hè năm 2025 của Đội Giao thông Xanh.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2025/Bình dân học vụ số/Chiến dịch “45 ngày đêm ra quân hỗ trợ hoạt động chuyển đổi số trong giai đoạn đầu vận hành mô hình chính quyền địa phương hai cấp” của Đội Bình dân học vụ số năm 2025.jpg": 1.1416,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2025/Ra quân Mùa hè Xanh/Lễ ra quân Chiến dịch Thanh niên Tình nguyện hè 2025.jpg": 2.436,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2025/Ra quân Mùa hè Xanh/Trường Đại học Sư phạm Hà Nội tham gia Lễ xuất quân Chiến dịch Sinh viên tình nguyện _Mùa hè xanh_ năm 2025 tại TP Hà Nội(1).jpg": 1.3331,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2025/Ra quân Mùa hè Xanh/Ngày ra quân chiến dịch tình nguyện Mùa hè xanh 2025(1).jpg": 1.3318,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2025/Ra quân Mùa hè Xanh/Trường Đại học Sư phạm Hà Nội tham gia Lễ xuất quân Chiến dịch Sinh viên tình nguyện _Mùa hè xanh_ năm 2025 tại TP Hà Nội.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2025/Ra quân Mùa hè Xanh/Ngày ra quân chiến dịch tình nguyện Mùa hè xanh 2025.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2025/Ra quân Mùa hè Xanh/Lễ ra quân Chiến dịch Thanh niên Tình nguyện hè năm 2025.jpg": 1.6437,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Tiếp sức thi cử/Chương trình Tiếp sức mùa thi của Đội Trí thức trẻ tại xã Tân Lạc, tỉnh Phú Thọ thuộc chiến dịch Mùa hè xanh năm 2026.jpg": 1.7778,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Tiếp sức thi cử/Đội Tiếp sức đến trường hỗ trợ Kỳ thi Năng khiếu tuyển sinh đại học hệ chính quy Trường Đại học Sư phạm Hà Nội trong chiến dịch Mùa hè Xanh năm 2026.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Tiếp sức thi cử/Đội Tiếp sức đến trường hỗ trọ Kỳ thi Đánh giá Năng lực SPT đợt 1 Trường Đại học Sư phạm Hà Nội trong chiến dịch Mùa hè Xanh 2026.jpg": 1.5021,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Môi trường - Chủ nhật Xanh/Chương trình _Chủ nhật Xanh_ lần thứ 3 năm 2026 do Đội Vì Môi Trường tổ chức tại Công viên Hồ điều hòa Mai Dịch.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Hành chính công Tân Lạc/Đội Trí thức trẻ hỗ trợ Nhân dân hoàn thiện các thủ tục tại Trung tâm Hành chính công xã Tân Lạc, tỉnh Phú Thọ trong chiến dịch Mùa hè Xanh 2026.jpg": 1.7778,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Hành chính công Tân Lạc/Đội Tri thức trẻ hỗ trợ hành chính công và tích hợp Sổ tay điện tử VNeID tại xã Tân Lạc, Phú Thọ năm 2026.jpg": 0.9023,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Tri ân - An sinh/Chương trình Thắp nến tri ân các Anh hùng liệt sĩ tại Nghĩa trang Mai Dịch của Đoàn Thanh niên trường Đại học Sư phạm Hà Nội năm 2026.jpg": 1.5015,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Tri ân - An sinh/Chương trình Trao gửi yêu thương - Kết nối nụ cười cho bệnh nhi nhân ngày Quốc tế Thiếu nhi năm 2026.jpg": 1.5015,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Văn hóa - Thư viện/Sinh viên Trường Đại học Sư phạm Hà Nôi tham gia biểu diễn trong khối hợp xướng phục vụ Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ XIII năm 2026.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Văn hóa - Thư viện/Đội Tình nguyện Hỗ trợ Thư Viện tiếp đón đoàn tham quan đến từ các trường Phổ thông Dân tộc bán trú tỉnh Lào Cai trong chiến dịch Mùa hè Xanh năm 2026.jpg": 1.4971,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Bình dân học vụ số/Đội Bình dân học vụ số hỗ trợ tập huấn kỹ năng số trên Đoàn phường Cầu Giấy trong chiến dịch Mùa hè Xanh năm 2026.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Bình dân học vụ số/Đội Bình dân học vụ số với chuyến đi đến Ninh Bình trong chiến dịch Mùa hè xanh năm 2026.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Bình dân học vụ số/Đội Bình dân học vụ số  giảng dạy kỹ năng số dành cho học sinh tại Ninh Bình thuộc chiến dịch _Mùa hè xanh_ 2026.png": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Bình dân học vụ số/Hành trình làn tỏa tri thức, nâng cao kỹ năng số cho cộng đồng của Đội Bình dân học vụ số trong chiến dịch Mùa hè Xanh năm 2026.jpg": 1.4949,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Ra quân Mùa hè Xanh/Trường Đại học Sư phạm Hà Nội tham gia Lễ xuất quân Chiến dịch Sinh viên tình nguyện Mùa hè xanh năm 2026 do Thành đoàn - Hội Sinh viên thành phố Hà Nội tổ chức.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Dạy học - Trao sách tại Ninh Bình/Hành trình Gieo tri thức - Lan tỏa yêu thương của Đội Tình nguyện dạy học cho học sinh Tiểu học tại Ninh Bình nằm trong chiến dịch Mùa hè Xanh năm 2026.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Dạy học - Trao sách tại Ninh Bình/English Festival 2026 cho học sinh tiền tiểu học Trường Tiểu học Nguyễn Tất Thành tại Phân hiệu HNUE Ninh Bình.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Dạy học - Trao sách tại Ninh Bình/Đoàn Thanh niên Trường ĐHSP Hà Nội trao tặng sách cho học sinh Tiểu học và THCS Châu Sơn, Ninh Bình năm 2026.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Dạy học - Trao sách tại Ninh Bình/Đội tình nguyện dạy Tiếng Anh và kỹ năng sống cho trẻ em tại Ninh Bình trong chiến dịch _Mùa hè xanh_ 2026.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Vườn cây Thanh niên Ươm mầm tương lai/Công trình Vườn cây Thanh niên “Ươm mầm tương lai” 2026 tại 2 điểm Trường Mầm non Yên Khê, Nghệ An do Đội Chuyển giao Kỹ thuật Nông nghiệp Trường ĐHSP Hà Nội thực hiện(1).jpg": 1.7769,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2026/Vườn cây Thanh niên Ươm mầm tương lai/Công trình Vườn cây Thanh niên “Ươm mầm tương lai” 2026 tại 2 điểm Trường Mầm non Yên Khê, Nghệ An do Đội Chuyển giao Kỹ thuật Nông nghiệp Trường ĐHSP Hà Nội thực hiện.jpg": 1.7769,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2022/Dạy học - Công nghệ/Tuần học đầu tiên của đội Dạy học tiếng Anh cho sinh viên thuộc chiến dịch Mùa hè xanh 2022.jpg": 1.4144,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2022/Dạy học - Công nghệ/Buổi hỗ trợ đầu tiên của đội Tình nguyện hỗ trợ công nghệ thông tin thuộc chiến dịch Mùa hè Xanh năm 2022.jpg": 1,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2022/Tập huấn - Tổng kết chiến dịch/Hội nghị tổng kết chiến dịch Thanh niên tình nguyện hè năm 2022.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2022/Tập huấn - Tổng kết chiến dịch/Lớp tập huấn chiến dịch Mùa hè Xanh 2022.jpg": 1.5004,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2022/Khoa học - Môi trường/Đội Vì Môi Trường thực hiện hoạt động làm sạch Công viên Hồ Điều Hòa thuộc chiến dịch Mùa hè Xanh năm 2022.jpg": 0.8652,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2022/Khoa học - Môi trường/Chiến dịch Mùa hè Xanh năm 2022 của Đội chuyển giao ứng dụng khoa học kĩ thuật.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2024/Môi trường - Chủ nhật Xanh/Chương trình Chủ nhật xanh lần thứ 3 kết hợp dọn dẹp nhà bia tưởng niệm liệt sỹ nằm trong chiến dịch Mùa hè xanh 2024 của Đội Vì Môi Trường.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2024/Môi trường - Chủ nhật Xanh/Chương trình ra quân hưởng ứng ngày chủ nhật xanh của  Đội Tình nguyện dạy kĩ năng sống cho trẻ em tại Lạng Sơn thuộc chiến dịch Mùa hè Xanh năm 2024.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2024/Môi trường - Chủ nhật Xanh/Chương trình Trao gửi yêu thương tại Bệnh viện E nhân ngày Quốc tế Thiếu nhi 1_6 bằng số tiền thu về từ chương trình _Đổi giấy lấy cây_ năm 2024 của Đội Vì Môi Trường.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2024/Môi trường - Chủ nhật Xanh/Chương trình “Thu hồi pin cũ - Bảo vệ trái đất xanh” năm 2024 do Đội Vì Môi Trường và nhãn hàng Cocoon tổ chức.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2024/Chăm sóc cộng đồng/Đội Tình Nguyện chăm sóc sức khỏe tinh thần cho người cao tuổi Trường ĐHSP Hà Nội trong chiến dịch Mùa hè xanh 2024 tại Viện dưỡng lão ALH.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2024/Ra quân - Tri thức trẻ/Ngày đầu tiên của đội Tri thức trẻ Tình nguyện tại Thanh Hóa thuộc chiến dịch Mùa hè xanh 2024.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2024/Ra quân - Tri thức trẻ/Lễ ra quân chiến dịch Thanh niên Tình nguyện hè năm 2024.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2024/Ra quân - Tri thức trẻ/Đội hình Trí thức trẻ Tình nguyện hỗ trợ xây dựng nông thôn mới thuộc chiến dịch Mùa hè Xanh năm 2024.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2024/Dạy học - Thư viện/Đội Hỗ trợ dạy học tiếng Anh cho sinh viên tổ chức buổi học online thuộc chiến dịch Mùa hè xanh năm 2024.jpg": 1.4769,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2024/Dạy học - Thư viện/Đội Tình nguyện Hỗ trợ Thư viện thực hiện chiến dịch Mùa hè xanh năm 2024.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2023/Chủ nhật Xanh - Tri ân liệt sĩ/Đội Vì Môi trường cùng Đoàn Thanh niên Phường Dịch Vọng Hậu dọn dẹp cảnh quan xung quanh Nhà bia tưởng niệm liệt sĩ phường Dịch Vọng Hậu năm 2023.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2023/Chủ nhật Xanh - Tri ân liệt sĩ/Chương trình _Chủ nhật xanh_ của đội Vì Môi Trường năm 2023.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2023/Hỗ trợ định danh điện tử/Đội Tình nguyện Hỗ trợ Kích hoạt định danh điện tử kết hợp cùng công an phường Dịch Vọng Hậu cấp CCCD gắn chip điện tử thuộc chiến dịch Mùa hè Xanh năm 2023.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2020/Ra quân Thanh niên tình nguyện hè/Lễ ra quân Chiến dịch Thanh niên Tình nguyện hè năm 2020(1).jpg": 1.5015,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/02_Bức tường Panorama_Mùa hè tình nguyện/2020/Ra quân Thanh niên tình nguyện hè/Lễ ra quân Chiến dịch Thanh niên Tình nguyện hè năm 2020.jpg": 1.5015,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Môi trường - Chủ nhật Xanh/Đội Vì Môi Trường tổ chức hoạt động _Chủ nhật Xanh” 2025, dọn dẹp vệ sinh, chăm sóc cảnh quan Đài tưởng niệm liệt sĩ phường Cầu Giấy.jpg": 0.75,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Tủ sách nhỏ - Giấc mơ lớn/Đội sinh viên tình nguyện dạy kỹ năng sống cho trẻ em trao tặng công trình thanh niên “Tủ sách nhỏ - giấc mơ lớn” tại Tuyên Quang năm 2025(1).jpg": 1.5,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Tủ sách nhỏ - Giấc mơ lớn/Đội sinh viên tình nguyện dạy kỹ năng sống cho trẻ em trao tặng công trình thanh niên “Tủ sách nhỏ - giấc mơ lớn” tại Tuyên Quang năm 2025.jpg": 1.5015,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Kỷ niệm Cách mạng tháng Tám - Quốc khánh/400 tình nguyện viên Trường ĐHSP Hà Nội tham gia hỗ trợ Chương trình kỷ niệm 80 năm Cách mạng tháng Tám thành công (19_8_1945 - 19_8_2025) và Quốc khánh nước CHXHCN Việt Nam (2_9_1945 - 2_9_2025).jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Kỷ niệm Cách mạng tháng Tám - Quốc khánh/Sinh viên Trường ĐHSP Hà Nội tham gia hỗ trợ Chương trình kỷ niệm 80 năm Cách mạng tháng Tám thành công (19_8_1945 - 19_8_2025) và Quốc khánh nước CHXHCN Việt Nam (2_9_1945 - 2_9_2025)(1).jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Kỷ niệm Cách mạng tháng Tám - Quốc khánh/Sinh viên Trường ĐHSP Hà Nội tham gia hỗ trợ Chương trình kỷ niệm 80 năm Cách mạng tháng Tám thành công (19_8_1945 - 19_8_2025) và Quốc khánh nước CHXHCN Việt Nam (2_9_1945 - 2_9_2025).jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Hỗ trợ khắc phục bão lũ/Đoàn Thanh niên Trường ĐHSP Hà NộiHỗ trợ sinh viên khắc phục hậu quả bão lũ tại khu vực miền Trung, Tây Nguyên năm 2025(1).jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Hỗ trợ khắc phục bão lũ/Đoàn Thanh niên Trường ĐHSP Hà NộiHỗ trợ sinh viên khắc phục hậu quả bão lũ tại khu vực miền Trung, Tây Nguyên năm 2025.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Thiện nguyện tại bệnh viện/Hội Sinh viên trường ĐHSP Hà Nội thăm hỏi, trao quà cho bệnh nhân tại Bệnh viện E - Xuân Ất Tỵ 2025(1).jpg": 1.2588,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Thiện nguyện tại bệnh viện/Top 21 Miss HNUE 2025 hỗ trợ phát cháo từ thiện cho bệnh nhân tại Viện Huyết học - Truyền máu Trung ương.jpg": 1.5004,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Thiện nguyện tại bệnh viện/Đội sinh viên tình nguyện Khoa Công tác xã hội – Trường Đại học Sư phạm Hà Nội hỗ trợ tổ chức buổi sinh hoạt câu lạc bộ cha mẹ trẻ bại não tại Bệnh viện Nhi Trung ương năm 2025(1).jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Thiện nguyện tại bệnh viện/Đội sinh viên tình nguyện Khoa Công tác xã hội – Trường Đại học Sư phạm Hà Nội hỗ trợ tổ chức buổi sinh hoạt câu lạc bộ cha mẹ trẻ bại não tại Bệnh viện Nhi Trung ương năm 2025.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Thiện nguyện tại bệnh viện/Hội Sinh viên trường ĐHSP Hà Nội thăm hỏi, trao quà cho bệnh nhân tại Bệnh viện E - Xuân Ất Tỵ 2025.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Thiện nguyện tại bệnh viện/Top 21 Miss HNUE 2025 hỗ trợ phát cháo từ thiện cho bệnh nhân tại Viện Huyết học - Truyền máu Trung ương(1).jpg": 1.5004,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Quà Tết - Quỹ đồng hành/Trường ĐHSP Hà Nội trao quà Tết cho học sinh, sinh viên có hoàn cảnh khó khăn, nỗ lực vươn lên trong học tập trong Ngày Tết học sinh, sinh viên - Xuân Ất Tỵ 2025.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Quà Tết - Quỹ đồng hành/Trường ĐHSP Hà Nội tổ chức ngày Hội Quỹ Đồng hành với học sinh, sinh viên Trường Đại học Sư phạm Hà Nội – “Hành trình Xanh” năm 2025.png": 1.3196,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Hiến máu tình nguyện/Chương trình hiến máu Sắc vàng hoàng yến 2025(1).jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Hiến máu tình nguyện/Chương trình hiến máu Sắc vàng hoàng yến 2025.jpg": 1.5,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2025/Hiến máu tình nguyện/Sinh viên trường ĐHSP Hà Nội tham gia hoạt động tại Điểm hiến máu Hướng Dương năm 2025.jpg": 1.1268,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Học bổng - Quà Tết/Trường ĐHSP Hà Nội trao học bổng đồng hành với học sinh, sinh viên vùng khó khăn trong Ngày hội Văn hoá các Dân tộc Việt Nam 2026.jpg": 1.5004,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Học bổng - Quà Tết/Trường ĐHSP Hà Nội trao 50 suất quà Tết cho học sinh, sinh viên có hoàn cảnh khó khăn, nỗ lực vươn lên trong học tập trong Ngày Tết học sinh, sinh viên - Xuân Bính Ngọ 2026.jpg": 1.4998,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Học bổng - Quà Tết/Trường ĐHSP Hà Nội trao học bổng đồng hành với học sinh, sinh viên vùng khó khăn trong Ngày hội Văn hoá các Dân tộc Việt Nam 2026(1).jpg": 1.5004,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Trao tặng sách Châu Sơn/Đoàn Thanh niên Trường Đại học Sư phạm Hà Nội trao tặng sách cho học sinh Trường TH&THCS Châu Sơn, phường Châu Sơn, tỉnh Ninh Bình năm 2026(1).jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Trao tặng sách Châu Sơn/Đoàn Thanh niên Trường Đại học Sư phạm Hà Nội trao tặng sách cho học sinh Trường TH&THCS Châu Sơn, phường Châu Sơn, tỉnh Ninh Bình năm 2026.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Chuyến xe về quê đón Tết Bính Ngọ/Đoàn Thanh niên Trường ĐHSP Hà Nội, tổ chức “Chuyến xe về quê đón Tết Bính Ngọ 2026”, hỗ trợ sinh viên về quê đón Tết(2).jpg": 1.5015,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Chuyến xe về quê đón Tết Bính Ngọ/Đoàn Thanh niên Trường ĐHSP Hà Nội, tổ chức “Chuyến xe về quê đón Tết Bính Ngọ 2026”, hỗ trợ sinh viên về quê đón Tết.jpg": 1.5015,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Chuyến xe về quê đón Tết Bính Ngọ/Đoàn Thanh niên Trường ĐHSP Hà Nội, tổ chức “Chuyến xe về quê đón Tết Bính Ngọ 2026”, hỗ trợ sinh viên về quê đón Tết(1).jpg": 1.5015,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Môi trường - Chủ nhật Xanh/Đội Vì Môi trường tổ chức chương trình _Đổi giấy lấy cây_ và trao quà cho các em nhỏ tại bệnh viện E nhân Ngày Quốc tế Thiếu nhi 1_6_2026.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Môi trường - Chủ nhật Xanh/Đội Vì Môi Trường tổ chức hoạt động _Chủ nhật Xanh lần thứ III” năm 2026.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Môi trường - Chủ nhật Xanh/Đội Vì Môi Trường tổ chức hoạt động _Chủ nhật Xanh” chào mừng Xuân Bính Ngọ 2026.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Gửi nắng lên non/ CLB Thanh niên Xung kích Khoa Ngữ văn tổ chức chương trình thiện nguyện _Gửi nắng lên non_ 2026 tại Trường Tiểu học Lũng Luông, xã Thần Sa, tỉnh Thái Nguyên.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Tri ân người có công/Chương trình Viết tiếp lời tri ân kỷ niệm 79 năm Ngày Thương binh - Liệt sĩ 27_7_2026.jpg": 1.5004,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Tri ân người có công/Đoàn Thanh niên Trường ĐHSP Hà Nội thăm hỏi và tặng quà gia đình người có công với cách mạng tại Ninh Bình nhân dịp kỉ niệm 79 năm Ngày Thương binh - Liệt sĩ (27_7_1947 - 27_7_2026).jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Hiến máu tình nguyện/Chương trình hiến máu Sắc vàng hoàng yến 2026.jpg": 1.5004,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Hiến máu tình nguyện/Lễ ra quân chương trình hiến máu Sắc vàng hoàng yến 2026.jpg": 1.5,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Hiến máu tình nguyện/Sinh viên Trường ĐHSP Hà Nội tại Ngày hội hiến máu _Mùa hè nhân ái_ 2026, tham gia hiến máu tình nguyện.jpg": 1.2946,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2026/Hiến máu tình nguyện/Sinh viên Trường ĐHSP Hà Nội tại Ngày hội hiến máu _Giọt hồng tri ân_ 2026.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/Không xác định năm/Lễ tiếp nhận xe hỗ trợ sinh viên/Lễ tiếp nhận 15 xe máy điện, 150 xe đạp hỗ trợ sinh viên.jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/Không xác định năm/Lễ tiếp nhận xe hỗ trợ sinh viên/Lễ tiếp nhận 15 xe máy điện, 150 xe đạp hỗ trợ sinh viên(1).jpg": 1.4993,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/Không xác định năm/Trao quà bệnh nhi tại Bệnh viện E/Đội Sinh viên tình nguyện trường ĐHSP Hà Nội trao quà cho bệnh nhi tại Bệnh viện E.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/Không xác định năm/Trao quà bệnh nhi tại Bệnh viện E/Đội Sinh viên tình nguyện trường ĐHSP Hà Nội trao quà cho bệnh nhi tại Bệnh viện E(1).jpg": 1.2473,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/Không xác định năm/Thăm hỏi bệnh nhân Viện Huyết học/Đoàn Thanh niên trường ĐHSP Hà Nội đến thăm hỏi bệnh nhân tại Viện Huyết học - Truyền máu Trung ương.jpg": 1.5004,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/Không xác định năm/Hiến máu Hướng Dương/Sinh viên tham gia hoạt động tại Điểm hiến máu Hướng Dương.jpg": 1.5,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/Không xác định năm/Clean up Việt Nam/Đội Vì Môi trường tham gia chiến dịch Clean up Việt Nam lần thứ 8.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2024/Hỗ trợ học sinh - Sinh viên/Trường ĐHSP Hà Nội trao quà Tết cho học sinh, sinh viên có hoàn cảnh khó khăn, nỗ lực vươn lên trong học tập trong Ngày Tết học sinh, sinh viên - Xuân Giáp Thìn 2024.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2024/Hỗ trợ học sinh - Sinh viên/Trường ĐHSP Hà Nội trao hỗ trợ từ Quỹ đồng hành với học sinh, sinh viên vùng khó khăn trong Ngày hội Văn hoá các Dân tộc Việt Nam 2024.jpg": 1.7769,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2024/Hiến máu tình nguyện/Sinh viên Trường ĐHSP Hà Nội tham gia Ngày hội hiến máu _Mùa hè nhân ái_ 2024.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2024/Hiến máu tình nguyện/Chương trình hiến máu Sắc vàng hoàng yến 2024.jpg": 1.3333,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2023/Hoạt động tình nguyện/Đội Vì Môi trường trao tặng 15 suất quà cho những bệnh nhân có hoàn cảnh khó khăn tại bệnh viện E, Hà Nội năm 2023.jpg": 1.5006,
  "Tư liệu cụm 2 - Dấu chân tình nguyện/03_Sư phạm trao yêu thương/2023/Hoạt động tình nguyện/CLB Dạy học tình nguyện trường ĐHSP Hà Nội tổ chức Giải Bóng đá Thanh niên Tình nguyện năm 2023.jpg": 1.3333
}
);

export function cleanPhotoTitle(file) {
    const withoutExtension = String(file || '').replace(/\.(?:jpe?g|png|webp)$/iu, '');
    const withoutCopyNumber = withoutExtension.replace(/\s*\(\d+\)\s*$/u, '');
    const withoutImagePrefix = withoutCopyNumber
        .replace(/^\s*(?:một\s+số\s+)?hình\s+ảnh\s+/iu, '')
        .replace(/^\s*ảnh\s+hoạt\s+động\s+/iu, 'Hoạt động ')
        .replace(/^\s*ảnh\s+/iu, '');
    const cleaned = withoutImagePrefix.replaceAll('_', ' ').replace(/\s+/gu, ' ').trim();
    return cleaned ? cleaned.charAt(0).toUpperCase() + cleaned.slice(1) : 'Tư liệu hoạt động';
}

function makeEvents(root, records) {
    return Object.freeze(records.map((record, index) => {
        const unknownYear = record.year === 'Không xác định năm';
        const year = unknownYear ? '' : record.year;
        const groupTitle = record.displayTitle || DATA.titleMap[record.group] || record.group.toLocaleUpperCase('vi-VN');
        const photos = record.files.map(fileItem => {
            const file = typeof fileItem === 'string' ? fileItem : fileItem.file;
            const sourceGroup = typeof fileItem === 'string' ? record.group : fileItem.sourceGroup;
            return Object.freeze({
            title: cleanPhotoTitle(file),
            year,
            content: cleanPhotoTitle(file),
            source: 'Tư liệu Đoàn TN – Hội SV Trường ĐHSP Hà Nội',
            imageUrl: root + record.year + '/' + sourceGroup + '/' + file,
            aspectRatio: IMAGE_ASPECTS[root + record.year + '/' + sourceGroup + '/' + file] || 1.5
        }); });
        return Object.freeze({
            id: (unknownYear ? 'bo-sung' : record.year) + '-' + String(index + 1).padStart(2, '0'),
            title: groupTitle,
            year: unknownYear ? 'TƯ LIỆU BỔ SUNG' : record.year,
            description: groupTitle,
            photos: Object.freeze(photos)
        });
    }));
}

// Mảng dữ liệu tăng dần theo thời gian; main.js ánh xạ lần lượt vào các cột từ phải sang trái.
const CURATED_PANORAMA = curateRecords(DATA.pan, PANORAMA_GROUP_PLAN);
const CURATED_LOVE = curateRecords(DATA.love, LOVE_GROUP_PLAN);

export const ZONE2_PANORAMA_EVENTS_V2 = makeEvents(PANORAMA_ROOT, CURATED_PANORAMA);
export const ZONE2_LOVE_EVENTS_V2 = makeEvents(LOVE_ROOT, CURATED_LOVE);
export const ZONE2_MEDIA_COUNTS_V2 = Object.freeze({
    panorama: DATA.pan.reduce((sum, group) => sum + group.files.length, 0),
    love: DATA.love.reduce((sum, group) => sum + group.files.length, 0)
});
