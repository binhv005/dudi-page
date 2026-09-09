export const COMPANY_CONFIG = {
  brandName: "DUDI Software",
  legalName: "CÔNG TY TNHH GIẢI PHÁP PHẦN MỀM DUDI",
  legalNameEn: "DUDI SOFTWARE SOLUTION CO., LTD",
  taxCode: "0319641544",
  addresses: [
    "232 Đường Nguyễn Thị Minh Khai, phường Xuân Hòa, TP.Hồ Chí Minh",
    "49/2 Đường 14, Phường Thủ Đức, TP.Hồ Chí Minh"
  ],
  address: "232 Đường Nguyễn Thị Minh Khai, phường Xuân Hòa, TP.Hồ Chí Minh",
  hotline: "(+84) 909 163 821",
  hotlineTel: "tel:0909163821",
  email: "contact@dudisoftware.com",
  emailMailto: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=contact@dudisoftware.com",
  emailUrl: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=contact@dudisoftware.com",
  zaloUrl: "https://zalo.me/2871243904030074512",
  tagline: "Công ty phần mềm hàng đầu với các giải pháp công nghệ hiện đại và sáng tạo, giúp doanh nghiệp phát triển bền vững.",
  operatingHours: "Thứ 2 - Thứ 7 (8:30 - 18:00)",
  warrantyDays: 30,
};

export const NAV_LINKS = [
  { label: "Vấn đề", href: "#problem-signs" },
  { label: "Giải pháp", href: "#solutions" },
  { label: "Case thực tế", href: "#case-studies" },
  { label: "Quy trình", href: "#process" },
  { label: "Bảng giá", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_DATA = {
  eyebrow: "DỊCH VỤ NÂNG CẤP & SỬA LỖI WEBSITE",
  h1: "Website cũ, chậm hoặc khó ra khách? DUDI giúp cập nhật đúng phần cần thiết.",
  description: "Kiểm tra, báo phạm vi trước, giá từ 500.000đ/gói.",
  priceHighlight: "Từ 500.000đ/gói",
  primaryCtaText: "Gửi website để kiểm tra",
  secondaryCtaText: "Nhắn Zalo",
  trustPoints: [
    { title: "Báo giá trước", desc: "Không phát sinh chi phí bất ngờ" },
    { title: "Phạm vi rõ ràng", desc: "Chốt danh sách đầu việc trước khi code" },
    { title: "Bảo hành lỗi 30 ngày", desc: "Hỗ trợ kỹ thuật sau bàn giao" },
  ],
};

export const PROBLEM_SIGNS = {
  heading: "Website của bạn có đang gặp những vấn đề này?",
  subheading: "Nhận diện đúng điểm nghẽn để sửa đúng chỗ, tránh lãng phí thời gian và ngân sách.",
  items: [
    {
      id: "slow",
      icon: "Gauge",
      title: "Web chậm",
      desc: "Khách phải chờ lâu mới thấy nội dung hoặc trang tải không ổn định.",
    },
    {
      id: "mobile",
      icon: "Smartphone",
      title: "Lỗi mobile",
      desc: "Giao diện vỡ khung, tràn viền hoặc nút bấm khó thao tác trên điện thoại.",
    },
    {
      id: "outdated",
      icon: "LayoutTemplate",
      title: "Giao diện cũ",
      desc: "Thiết kế nhiều năm chưa đổi mới, giảm uy tín thương hiệu trong mắt đối tác.",
    },
    {
      id: "cms",
      icon: "FileEdit",
      title: "Khó cập nhật",
      desc: "Hệ thống quản trị phức tạp, dễ lỗi khi thêm bài viết hoặc đổi banner.",
    },
    {
      id: "form",
      icon: "SendHorizontal",
      title: "Form lỗi",
      desc: "Khách gửi liên hệ nhưng không nhận được data hoặc hay bị tin nhắn rác.",
    },
    {
      id: "leads",
      icon: "TrendingDown",
      title: "Không ra lead",
      desc: "Có lượng người truy cập nhưng thiếu điểm kêu gọi hành động hiệu quả.",
    },
  ],
};

export const SOLUTIONS_DATA = {
  heading: "DUDI xử lý đúng vấn đề, không sửa lan man.",
  subheading: "Từng hạng mục đều được quy định rõ đầu việc bàn giao và cải thiện cụ thể.",
  items: [
    {
      id: "content",
      icon: "FileText",
      name: "Nội dung",
      desc: "Chuẩn hóa bố cục bài viết, banner, hình ảnh và căn chỉnh kiểu chữ đồng bộ.",
    },
    {
      id: "ui",
      icon: "Sparkles",
      name: "UI",
      desc: "Tinh chỉnh giao diện hiện đại, rõ phân cấp thị giác và tăng tính chuyên nghiệp.",
    },
    {
      id: "mobile",
      icon: "SmartphoneNfc",
      name: "Mobile",
      desc: "Tối ưu hiển thị mượt mà trên mọi kích thước màn hình smartphone và tablet.",
    },
    {
      id: "speed",
      icon: "Zap",
      name: "Tốc độ",
      desc: "Tối ưu dung lượng ảnh, dọn dẹp mã nguồn thừa giúp website mở nhanh hơn.",
    },
    {
      id: "seo",
      icon: "SearchCode",
      name: "SEO",
      desc: "Kiểm tra các lỗi SEO kỹ thuật cơ bản và cấu trúc nội dung liên quan.",
    },
    {
      id: "form",
      icon: "MailCheck",
      name: "Form",
      desc: "Sửa lỗi gửi thông tin, tích hợp thông báo email và chống spam cơ bản.",
    },
    {
      id: "feature",
      icon: "CodeXml",
      name: "Chức năng",
      desc: "Xử lý lỗi JavaScript, logic bộ lọc, tìm kiếm hoặc xung đột plugin.",
    },
    {
      id: "audit",
      icon: "ShieldAlert",
      name: "Kiểm tra lỗi",
      desc: "Rà soát broken link 404, lỗi console trình duyệt và các nguy cơ cơ bản.",
    },
  ],
  ctaText: "Xem các gói dịch vụ",
};

export const CASE_STUDIES = {
  heading: "Một số dự án DUDI đã thực hiện",
  subheading: "Thông tin thực tế, minh bạch về phạm vi và chi phí thực hiện.",
  items: [
    {
      id: "case-packaging",
      category: "Website bao bì",
      price: "11,5 triệu",
      priceUnit: "Giá/gói",
      statusBadge: "Đã hoàn thành & đang hoạt động",
      scopeTitle: "Phạm vi thực hiện:",
      scopeItems: [
        "Tái cấu trúc giao diện danh mục sản phẩm bao bì và bảng thông số",
        "Tối ưu hiển thị mobile/tablet, xử lý dứt điểm tràn bảng biểu",
        "Tích hợp form báo giá tự động gửi về email phòng kinh doanh",
        "Dọn dẹp mã nguồn cũ, nén asset hình ảnh tăng tốc tải trang",
      ],
      notice: "Website đã hoàn thành và đang hoạt động. Hiện chưa có đủ dữ liệu được xác minh từ khách để công bố thêm kết quả.",
    },
    {
      id: "case-travel",
      category: "Website du lịch",
      price: "3,5 triệu",
      priceUnit: "Giá/gói",
      statusBadge: "Đã hoàn thành & đã thanh toán",
      scopeTitle: "Phạm vi thực hiện:",
      scopeItems: [
        "Khắc phục xung đột script, sửa nút xem lịch trên mobile",
        "Thiết kế lại khối đặt chỗ nhanh ngay đầu trang chi tiết tour",
        "Sửa lỗi form đăng ký tour, gửi email xác nhận cho khách",
        "Tối ưu lại font chữ và kích thước hình ảnh banner tour",
      ],
      notice: "Website đã hoàn thành, đã thanh toán và vẫn đang hoạt động. SEO hiện do đơn vị khác thực hiện.",
    },
  ],
};

export const PROCESS_DATA = {
  heading: "Quy trình làm việc rõ ràng từ đầu đến cuối",
  subheading: "Mỗi bước đều có đầu vào và kết quả cụ thể. Phạm vi luôn được chốt trước khi viết code.",
  steps: [
    {
      stepNumber: "01",
      title: "Gửi web",
      dudiRole: "Tiếp nhận website và vấn đề khách đang gặp.",
      clientInput: "URL website + vấn đề cần kiểm tra.",
      output: "Thông tin yêu cầu ban đầu.",
    },
    {
      stepNumber: "02",
      title: "Đánh giá",
      dudiRole: "Kiểm tra các vấn đề liên quan phạm vi yêu cầu.",
      clientInput: "Thông tin bổ sung nếu cần.",
      output: "Danh sách vấn đề/đề xuất xử lý.",
    },
    {
      stepNumber: "03",
      title: "Chốt phạm vi",
      highlightNotice: "Bước này phải xảy ra trước khi code.",
      dudiRole: "Xác định rõ hạng mục, chi phí và thời gian.",
      clientInput: "Xác nhận phạm vi.",
      output: "Phạm vi công việc được chốt.",
    },
    {
      stepNumber: "04",
      title: "Triển khai",
      dudiRole: "Thực hiện các hạng mục đã thống nhất.",
      clientInput: "Quyền truy cập cần thiết.",
      output: "Phiên bản triển khai.",
    },
    {
      stepNumber: "05",
      title: "Nghiệm thu",
      dudiRole: "Kiểm tra theo phạm vi đã chốt.",
      clientInput: "Feedback theo phạm vi.",
      output: "Danh sách nghiệm thu/sửa lỗi.",
    },
    {
      stepNumber: "06",
      title: "Bàn giao",
      dudiRole: "Bàn giao phiên bản hoàn thiện.",
      clientInput: "Xác nhận hoàn tất.",
      output: "Website + thông tin bàn giao.",
    },
  ],
};

export const PRICING_DATA = {
  heading: "Bảng giá dịch vụ",
  subheading: "Chi phí cố định theo gói công việc cụ thể. Không thu phí duy trì hàng tháng.",
  outOfScopeNotice: "Phí ngoài phạm vi sẽ được báo trước khi thực hiện.",
  packages: [
    {
      id: "package-basic",
      packageName: "Gói Cơ bản",
      price: "500.000đ",
      priceUnit: "Giá/gói",
      recommended: false,
      summary: "Xử lý nhanh một vài lỗi nhỏ cụ thể",
      targetAudience: "Phù hợp website chỉ cần xử lý nhanh 1–2 lỗi riêng lẻ.",
      duration: "1 – 2 ngày làm việc",
      revisions: "1 vòng phản hồi",
      features: [
        "Sửa 1–2 lỗi giao diện hoặc hiển thị cụ thể",
        "Sửa lỗi form liên hệ hoặc nút bấm bị liệt",
        "Tối ưu cơ bản 1 trang đích quan trọng",
        "Bảo hành lỗi phát sinh trong 30 ngày",
      ],
      ctaText: "Chọn Gói Cơ bản",
      formValue: "Gói Cơ bản — 500.000đ",
    },
    {
      id: "package-standard",
      packageName: "Gói Tiêu chuẩn",
      price: "2.000.000đ",
      priceUnit: "Giá/gói",
      recommended: true,
      badgeText: "Được chọn nhiều",
      summary: "Nâng cấp nhiều hạng mục quan trọng",
      targetAudience: "Phù hợp website đang hoạt động cần tân trang và tăng tốc rõ rệt.",
      duration: "3 – 5 ngày làm việc",
      revisions: "2 vòng phản hồi",
      features: [
        "Cải thiện UI và căn chỉnh responsive toàn trang",
        "Tối ưu tốc độ tải trang & hiệu năng cơ bản",
        "Kiểm tra và sửa lỗi toàn bộ hệ thống form & tương tác",
        "Sửa lỗi SEO kỹ thuật cơ bản (heading, meta, sitemap)",
        "Bảo hành lỗi phát sinh trong 30 ngày",
      ],
      ctaText: "Chọn Gói Tiêu chuẩn",
      formValue: "Gói Tiêu chuẩn — 2.000.000đ",
    },
    {
      id: "package-advanced",
      packageName: "Gói Nâng cao",
      price: "5.000.000đ",
      priceUnit: "Giá/gói",
      recommended: false,
      summary: "Nâng cấp website ở phạm vi lớn hơn",
      targetAudience: "Phù hợp website cần nâng cấp sâu về cả giao diện, tốc độ và chức năng.",
      duration: "5 – 7 ngày làm việc",
      revisions: "3 vòng phản hồi",
      features: [
        "Nâng cấp UI/UX chuyên sâu các trang chính",
        "Tối ưu hiệu năng tải trang & nén asset toàn diện",
        "Tái cấu trúc chức năng lọc/tìm kiếm hoặc form nâng cao",
        "Chuẩn hóa cấu trúc dữ liệu SEO và thẻ kỹ thuật",
        "Tài liệu hướng dẫn quản trị + Bảo hành 30 ngày",
      ],
      ctaText: "Chọn Gói Nâng cao",
      formValue: "Gói Nâng cao — 5.000.000đ",
    },
  ],
};

export const FULL_REDESIGN_DATA = {
  heading: "Website quá cũ hoặc cần làm lại toàn bộ?",
  content: "Nếu code cũ khó bảo trì hoặc website cần thiết kế và xây dựng lại toàn bộ, DUDI sẽ đánh giá riêng.",
  price: "Báo giá riêng từ 10 triệu.",
  priceUnit: "Giá/dự án",
  ctaText: "Yêu cầu đánh giá lại toàn bộ",
  formValue: "Làm mới toàn bộ — từ 10 triệu",
  highlights: [
    "Khảo sát hiện trạng code cũ và đề xuất kiến trúc mới dễ bảo trì",
    "Thiết kế giao diện chuẩn nhận diện thương hiệu và tối ưu chuyển đổi",
    "Không gộp trong gói 5 triệu — báo giá minh bạch theo phạm vi thực tế",
  ],
};

export const WHY_DUDI_DATA = {
  heading: "Vì sao chọn DUDI",
  subheading: "Làm việc minh bạch, rõ trách nhiệm và tôn trọng ngân sách của khách hàng.",
  points: [
    {
      id: "scope",
      title: "Phạm vi rõ",
      desc: "Biết mình nhận được gì trước khi bắt đầu.",
      icon: "FileCheck2",
    },
    {
      id: "audit",
      title: "Kiểm tra trước",
      desc: "Đánh giá vấn đề trước khi đề xuất xử lý.",
      icon: "SearchCheck",
    },
    {
      id: "pricing",
      title: "Báo giá trước",
      desc: "Chi phí được xác định theo phạm vi.",
      icon: "BadgeDollarSign",
    },
    {
      id: "warranty",
      title: "Bảo hành lỗi 30 ngày",
      desc: "Áp dụng cho lỗi thuộc phạm vi đã thực hiện.",
      icon: "ShieldCheck",
    },
    {
      id: "person",
      title: "Người phụ trách rõ ràng",
      desc: "Khách biết ai tiếp nhận và xử lý yêu cầu.",
      icon: "UserCheck",
    },
  ],
};

export const FAQ_DATA = {
  heading: "Câu hỏi thường gặp",
  subheading: "Giải đáp rõ ràng các thắc mắc trước khi bạn quyết định gửi website.",
  items: [
    {
      id: "faq-1",
      question: "Giá được tính như thế nào?",
      answer: "Giá được tính cố định theo từng gói công việc cụ thể đã chốt (500k, 2tr, 5tr hoặc báo giá riêng từ 10tr cho dự án làm lại toàn bộ). DUDI không thu phí định kỳ hàng tháng và luôn báo giá trước khi thực hiện.",
    },
    {
      id: "faq-2",
      question: "Thời gian thực hiện bao lâu?",
      answer: "Thời gian hoàn thành phụ thuộc vào gói: Gói Cơ bản 1–2 ngày; Gói Tiêu chuẩn 3–5 ngày; Gói Nâng cao 5–7 ngày làm việc. Thời gian cụ thể sẽ được ghi rõ trong phạm vi công việc thống nhất ban đầu.",
    },
    {
      id: "faq-3",
      question: "Tôi chưa có website thì sao?",
      answer: "Nếu bạn chưa có website hoặc muốn làm mới từ đầu, DUDI có dịch vụ thiết kế & xây dựng trọn gói từ 10 triệu đồng. Bạn có thể để trống trường URL website trong form tư vấn để DUDI liên hệ trao đổi chi tiết.",
    },
    {
      id: "faq-4",
      question: "Có ảnh hưởng dữ liệu hiện tại không?",
      answer: "Không. DUDI luôn chủ động sao lưu (backup) mã nguồn và cơ sở dữ liệu trước khi can thiệp. Với các nâng cấp lớn, công việc được thực hiện trên môi trường thử nghiệm (staging) trước khi đưa lên trang chính thức.",
    },
    {
      id: "faq-5",
      question: "Có hỗ trợ SEO không?",
      answer: "Có, trong phạm vi SEO kỹ thuật cơ bản: sửa lỗi thẻ heading, thẻ meta, sitemap XML, robots.txt và tốc độ tải trang. DUDI không cam kết các mục tiêu tuyệt đối như top 1 Google hay tăng traffic cụ thể.",
    },
    {
      id: "faq-6",
      question: "Bảo hành như thế nào?",
      answer: "DUDI bảo hành 30 ngày cho tất cả các lỗi phát sinh trực tiếp thuộc phạm vi hạng mục đã triển khai và bàn giao. Nếu phát sinh lỗi kỹ thuật liên quan, DUDI sẽ khắc phục nhanh chóng và miễn phí.",
    },
    {
      id: "faq-7",
      question: "Thanh toán như thế nào?",
      answer: "Thông thường quý khách tạm ứng 50% sau khi chốt phạm vi công việc và thanh toán 50% còn lại sau khi nghiệm thu hoàn tất. DUDI hỗ trợ xuất hóa đơn VAT điện tử nếu doanh nghiệp có nhu cầu.",
    },
    {
      id: "faq-8",
      question: "Tôi cần cung cấp quyền truy cập gì?",
      answer: "Bạn chỉ cần cung cấp tài khoản quản trị website (Admin) hoặc tài khoản Hosting/FTP có liên quan đến phần cần sửa. DUDI hướng dẫn bạn phân quyền an toàn hoặc đổi mật khẩu sau khi bàn giao.",
    },
    {
      id: "faq-9",
      question: "Có thể sửa ngoài phạm vi không?",
      answer: "Có thể. Nếu trong quá trình làm bạn muốn thêm các đầu việc mới ngoài danh sách đã chốt, DUDI sẽ trao đổi và báo chi phí bổ sung trước khi triển khai, không tự ý làm rồi thu phí.",
    },
    {
      id: "faq-10",
      question: "Website quá cũ có làm theo gói 5 triệu được không?",
      answer: "Nếu website chỉ cần nâng cấp giao diện, sửa lỗi và tối ưu hiệu năng trên nền tảng hiện có thì gói 5 triệu hoàn toàn phù hợp. Nhưng nếu mã nguồn cũ khó bảo trì hoặc cần đập đi xây lại toàn bộ, DUDI sẽ đề xuất gói làm mới riêng từ 10 triệu.",
    },
  ],
};

export const FORM_DATA = {
  heading: "Gửi website để nhận tư vấn phạm vi",
  subheading: "Điền thông tin cơ bản để DUDI xem qua tình trạng website và đề xuất phương án phù hợp.",
  packagesOptions: [
    { value: "Chưa biết / cần tư vấn", label: "Chưa biết / cần tư vấn" },
    { value: "Gói Cơ bản — 500.000đ", label: "Gói Cơ bản — 500.000đ" },
    { value: "Gói Tiêu chuẩn — 2.000.000đ", label: "Gói Tiêu chuẩn — 2.000.000đ (Được chọn nhiều)" },
    { value: "Gói Nâng cao — 5.000.000đ", label: "Gói Nâng cao — 5.000.000đ" },
    { value: "Làm mới toàn bộ — từ 10 triệu", label: "Làm mới toàn bộ — từ 10 triệu (Báo giá riêng)" },
  ],
  consentText: "Tôi đồng ý để DUDI liên hệ về yêu cầu này.",
  submitBtnText: "Gửi website để kiểm tra",
  successMessage: "Đã nhận yêu cầu. DUDI sẽ liên hệ lại để trao đổi phạm vi.",
};

export const FINAL_CTA_DATA = {
  heading: "Website của bạn đang gặp vấn đề nào? Gửi để DUDI kiểm tra trước.",
  description: "Biết đúng vấn đề, chốt đúng phạm vi và chi phí trước khi triển khai.",
  primaryCtaText: "Gửi website để kiểm tra",
  secondaryCtaText: "Nhắn Zalo",
};
