'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  vi: {
    // Navigation
    home: 'Trang chủ',
    about: 'Giới thiệu',
    news: 'Tin tức',
    faq: 'Câu hỏi thường gặp',
    contact: 'Liên hệ',

    
    // Home page
    heroTitle: 'LT STUDIO',
    heroSubtitle: 'Studio sản xuất video giải trí và truyền thông',
    releaseFirstSingle: 'Liên Hệ Ngay',
    aboutUs: 'Về chúng tôi',
    aboutDescription1: 'LT Studio là studio sản xuất video giải trí và truyền thông tại Việt Nam. Chúng tôi đồng hành cùng doanh nghiệp, thương hiệu và nhà sáng tạo để biến ý tưởng thành video quảng cáo, TVC, phim ngắn và nội dung số.',
    aboutDescription2: 'Với hơn 9 năm kinh nghiệm, một ê-kíp theo sát toàn bộ quy trình từ ý tưởng, kịch bản, quay dựng đến hậu kỳ để mỗi sản phẩm giữ đúng thông điệp và phù hợp với nền tảng phát hành.',
    readMore: 'ĐỌC THÊM →',
    completedProjects: 'Dự án hoàn thành',
    clients: 'Khách hàng',
    yearsExperience: 'Năm kinh nghiệm',
    support: 'Hỗ trợ',
    digitalStoresTitle: 'Tối ưu cho từng nền tảng số',
    digitalStoresDescription: 'LT Studio sản xuất và tối ưu video cho các nền tảng có lượng khán giả lớn nhất — YouTube, TikTok, Facebook và nhiều kênh số khác — giúp nội dung của bạn xuất hiện đúng nơi người xem đang ở.',
    findPlanTitle: 'Tìm gói phù hợp nhất với bạn',
    findPlanDescription: 'Đưa video của bạn đến khán giả trên các nền tảng số phổ biến. Theo dõi hiệu quả nội dung và tối ưu để mỗi video mang lại giá trị thật cho thương hiệu.',
    youtubeChannels: 'KÊNH YOUTUBE',
    employees: 'NHÂN VIÊN',
    millionViews: 'TRIỆU LƯỢT XEM / THÁNG',
    partnerCountries: 'QUỐC GIA ĐỐI TÁC',
    ourServices: 'Dịch vụ của chúng tôi',
    servicesDescription: 'Chúng tôi cung cấp đa dạng các dịch vụ video và truyền thông chuyên nghiệp',
    videoProduction: 'Sản xuất Video',
    videoProductionDesc: 'Sản xuất video quảng cáo, video doanh nghiệp, video sự kiện với chất lượng chuyên nghiệp',
    entertainmentVideo: 'Video Giải trí',
    entertainmentVideoDesc: 'Tạo ra các nội dung giải trí hấp dẫn, viral content và video cho các nền tảng số',
    digitalMedia: 'Truyền thông Số',
    digitalMediaDesc: 'Chiến lược truyền thông số, quản lý nội dung và phát triển thương hiệu trực tuyến',
    learnMore: 'Tìm hiểu thêm →',
    getStartedNow: 'Bắt đầu ngay',
    getStartedDescription: 'Cùng LT Studio biến ý tưởng thành video giải trí và truyền thông chuyên nghiệp ngay hôm nay',
    brandProjects: 'Dự án thương hiệu',
    brandProjectsDescription: 'Khám phá các dự án thương hiệu nổi bật mà chúng tôi đã thực hiện cho các đối tác và khách hàng',
    viewAllProjects: 'Xem tất cả dự án',
    projectPlaylist1: 'Dự án thương hiệu nổi bật',
    projectPlaylist2: 'Video quảng cáo & TVC',
    projectPlaylist3: 'Sản phẩm điện ảnh',
    projectPlaylist4: 'Nội dung sáng tạo',
    openPlaylist: 'Mở playlist trên YouTube',
    yourName: 'Tên của bạn *',
    phoneNumber: 'Số điện thoại *',
    email: 'Email *',
    yourMessage: 'Tin nhắn của bạn (Tùy chọn)',
    send: 'GỬI',
    
    // Footer
    aboutLTStudio: 'VỀ LT STUDIO',
    address: 'Địa chỉ: Tp. Nam Định (cuối đường Thái Bình, tp Nam Định)',
    hotline: 'Hotline: +84944.108.872',
    whatsapp: 'WhatsApp: +84944.108.872',
    contactWithUs: 'LIÊN HỆ VỚI CHÚNG TÔI',
    emailContact: 'Email: contact@ltstudio.com.vn',
    fanpage: 'Fanpage: www.facebook.com/ltstudio.net',
    designedBy: 'Thiết kế bởi giftyid.vn',
    
    // About page
    aboutPageTitle: 'GIỚI THIỆU',
    aboutCompany: 'CÔNG TY TNHH MTV LT STUDIO',
    aboutLTStudioTitle: 'Về LT Studio',
    aboutLTStudioDesc1: 'LT Studio là studio sản xuất video giải trí và truyền thông tại Việt Nam, phục vụ doanh nghiệp, thương hiệu và nhà sáng tạo nội dung.',
    aboutLTStudioDesc2: 'Với hơn 9 năm kinh nghiệm, chúng tôi thực hiện video quảng cáo, TVC, phim ngắn, video sự kiện và nội dung số theo một quy trình xuyên suốt từ ý tưởng đến hậu kỳ.',
    getStarted: 'BẮT ĐẦU →',
    missionDesc1: 'Với hơn 9 năm kinh nghiệm, LT Studio đồng hành cùng doanh nghiệp, thương hiệu và nhà sáng tạo để biến ý tưởng thành video quảng cáo, TVC, phim ngắn và nội dung giải trí thu hút người xem. Sứ mệnh của chúng tôi là làm cho quy trình sản xuất video trở nên rõ ràng, gọn gàng và hiệu quả ở mọi quy mô.',
    missionDesc2: 'Chúng tôi tin rằng mỗi thương hiệu đều có một câu chuyện đáng được kể. Với LT Studio, bạn không chỉ có một video — bạn có một sản phẩm truyền thông giúp thương hiệu chạm đến đúng khán giả.',
    releaseFirstSingleNow: 'BẮT ĐẦU DỰ ÁN CỦA BẠN',
    whyChooseLTStudio: 'Tại sao chọn LT Studio',
    globalReach: 'Đa nền tảng',
    globalReachDesc: 'Video được sản xuất và tối ưu cho mọi nền tảng — YouTube, mạng xã hội, màn hình sự kiện và website — để nội dung của bạn tiếp cận đúng khán giả.',
    fairCompensation: 'Trọn gói một đầu mối',
    fairCompensationDesc: 'Từ ý tưởng, kịch bản, quay dựng đến hậu kỳ — bạn chỉ làm việc với một ê-kíp duy nhất cho toàn bộ hành trình sản xuất.',
    userFriendlyPlatform: 'Ê-kíp chuyên nghiệp',
    userFriendlyPlatformDesc: 'Đội ngũ giàu kinh nghiệm sản xuất và truyền thông, tập trung vào điều quan trọng nhất — kể câu chuyện thương hiệu của bạn một cách cuốn hút.',
    supportiveCommunity: 'Đồng hành dài lâu',
    supportiveCommunityDesc: 'Không dừng ở thành phẩm, chúng tôi cùng bạn lên kế hoạch nội dung và tối ưu để thương hiệu phát triển bền vững.',
    anyQuestions: 'Có câu hỏi nào? Gửi tin nhắn cho tôi',
    contactLTStudioHere: 'LIÊN HỆ VỚI LT STUDIO TẠI ĐÂY !',
    
    // FAQ page
    faqTitle: 'Câu hỏi thường gặp',
    faqDescription: 'Có câu hỏi? Xem các câu hỏi thường gặp nhất của chúng tôi để giúp bạn nhận được câu trả lời nhanh chóng. Có câu hỏi mà bạn không thấy được trả lời ở đây? Liên hệ với chúng tôi và đội ngũ hỗ trợ khách hàng của chúng tôi sẽ giúp đỡ!',
    moreQuestion: 'THÊM CÂU HỎI',
    faqSectionTitle: 'Câu hỏi thường gặp',
    contactWithUsTitle: 'LIÊN HỆ VỚI CHÚNG TÔI',
    contactDescription: 'Có câu hỏi hoặc nhận xét nào? Chỉ cần viết cho chúng tôi một tin nhắn',
    faqQuestion1: 'LT Studio cung cấp những dịch vụ video nào?',
    faqAnswer1: 'Chúng tôi sản xuất video quảng cáo, TVC, video doanh nghiệp và sự kiện, phim ngắn cùng nội dung giải trí cho các nền tảng số.',
    faqQuestion2: 'Một dự án video thường mất bao lâu?',
    faqAnswer2: 'Thời gian phụ thuộc vào phạm vi dự án. Trước khi bắt đầu, chúng tôi sẽ thống nhất với bạn một tiến độ rõ ràng từ brief đến bàn giao.',
    faqQuestion3: 'LT Studio có thực hiện trọn quy trình sản xuất không?',
    faqAnswer3: 'Có. Một ê-kíp phụ trách xuyên suốt từ ý tưởng, kịch bản, quay dựng đến biên tập và hậu kỳ.',
    faqQuestion4: 'Video được tối ưu cho những nền tảng nào?',
    faqAnswer4: 'Chúng tôi bàn giao định dạng phù hợp với YouTube, TikTok, Facebook, màn hình sự kiện và website theo nhu cầu của dự án.',
    faqQuestion5: 'LT Studio có hỗ trợ chiến lược nội dung không?',
    faqAnswer5: 'Có. Ngoài sản xuất, chúng tôi có thể cùng bạn lên kế hoạch nội dung và định hướng truyền thông phù hợp với mục tiêu thương hiệu.',
    faqQuestion6: 'Tôi cần làm gì để bắt đầu?',
    faqAnswer6: 'Hãy gửi cho chúng tôi ý tưởng hoặc brief. Đội ngũ LT Studio sẽ trao đổi mục tiêu, phạm vi và đề xuất hướng triển khai phù hợp.',
    
    // Contact page
    contactPageTitle: 'Liên hệ với chúng tôi',
    sendMessage: 'Gửi tin nhắn cho chúng tôi',
    getStartedNowContact: 'Bắt đầu ngay',
    joinArtists: 'Liên hệ LT Studio để bắt đầu dự án video của bạn ngay hôm nay',
    addressTitle: 'ĐỊA CHỈ',
    addressText: 'Tp. Nam Định (cuối đường Thái Bình, tp Nam Định)',
    openingHours: 'GIỜ MỞ CỬA',
    openingHoursText: 'Thứ 2 đến Thứ 7: 7:30 sáng - 17:00 chiều',
    emailTitle: 'E-MAIL',
    phoneTitle: 'SỐ ĐIỆN THOẠI',
    faqContactTitle: 'CÂU HỎI THƯỜNG GẶP',
    faqContactDescription: 'Có câu hỏi hoặc nhận xét nào? Chỉ cần viết cho chúng tôi một tin nhắn',
    interactiveMap: 'Bản đồ tương tác',
    
    // News page
    newsTitle: 'Không tìm thấy',
    newsDescription: 'Có vẻ như chúng tôi không thể tìm thấy những gì bạn đang tìm kiếm. Có lẽ tìm kiếm có thể giúp ích.',
    search: 'Tìm kiếm...',
    noContentTitle: 'Không có nội dung',
    noContentDescription: 'Chúng tôi hiện đang làm việc để thêm tin tức và cập nhật. Vui lòng kiểm tra lại sau hoặc liên hệ với chúng tôi để biết thông tin mới nhất.',
    contactUs: 'Liên hệ với chúng tôi',
    searchWidget: 'Tìm kiếm',
    searchPlaceholder: 'TÌM KIẾM',
    recentPosts: 'Bài viết gần đây',
    recentComments: 'Bình luận gần đây',
    helloWorld: 'Xin chào thế giới!',
    wordpressCommenter: 'Người bình luận WordPress',
    in: 'trong'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    news: 'News',
    faq: 'FAQ',
    
    // Home page
    heroTitle: 'LT STUDIO',
    heroSubtitle: 'Entertainment and media video production studio',
    releaseFirstSingle: 'Contact Us Now',
    aboutUs: 'About us',
    aboutDescription1: 'LT Studio is an entertainment and media video production studio in Vietnam. We work with businesses, brands and creators to turn ideas into commercials, TVCs, short films and digital content.',
    aboutDescription2: 'With more than 9 years of experience, one team follows the entire process from concept and scripting to filming, editing and post-production, keeping every piece true to its message and intended platform.',
    readMore: 'READ MORE →',
    completedProjects: 'Completed Projects',
    clients: 'Clients',
    yearsExperience: 'Years Experience',
    support: 'Support',
    digitalStoresTitle: '200+ Different Digital Stores',
    digitalStoresDescription: 'LT Studio produces and optimizes video for the platforms with the largest audiences — YouTube, TikTok, Facebook and many other digital channels — so your content shows up right where your viewers are.',
    findPlanTitle: 'Find The Plan That Best Suits You',
    findPlanDescription: 'Bring your video to audiences across the most popular digital platforms. Track content performance and optimize so every video delivers real value for your brand.',
    youtubeChannels: 'YOUTUBE CHANNELS',
    employees: 'EMPLOYEES',
    millionViews: 'MILLION VIEWS / MONTH',
    partnerCountries: 'PARTNER COUNTRIES',
    ourServices: 'Our Services',
    servicesDescription: 'We provide diverse professional video and media services',
    videoProduction: 'Video Production',
    videoProductionDesc: 'Professional production of advertising videos, corporate videos, event videos with professional quality',
    entertainmentVideo: 'Entertainment Video',
    entertainmentVideoDesc: 'Create engaging entertainment content, viral content and videos for digital platforms',
    digitalMedia: 'Digital Media',
    digitalMediaDesc: 'Digital media strategy, content management and online brand development',
    learnMore: 'Learn more →',
    getStartedNow: 'Get Started Now',
    getStartedDescription: 'Turn your idea into professional entertainment and media video with LT Studio today',
    brandProjects: 'Brand Projects',
    brandProjectsDescription: 'Explore our outstanding brand projects that we have created for our partners and clients',
    viewAllProjects: 'View All Projects',
    projectPlaylist1: 'Featured Brand Projects',
    projectPlaylist2: 'Advertising Videos & TVC',
    projectPlaylist3: 'Cinema Productions',
    projectPlaylist4: 'Creative Content',
    openPlaylist: 'Open playlist on YouTube',
    yourName: 'Your Name *',
    phoneNumber: 'Phone Number*',
    email: 'Email *',
    yourMessage: 'Your message (Optional)',
    send: 'SEND',
    
    // Footer
    aboutLTStudio: 'ABOUT LT STUDIO',
    address: 'Address: Tp. Nam Định (cuối đường Thái Bình, tp Nam Định)',
    hotline: 'Hotline: +84944.108.872',
    whatsapp: 'WhatsApp: +84944.108.872',
    contactWithUs: 'CONTACT WITH US',
    emailContact: 'Email: contact@ltstudio.com.vn',
    fanpage: 'Fanpage: www.facebook.com/ltstudio.net',
    designedBy: 'Designed By giftyid.vn',
    
    // About page
    aboutPageTitle: 'ABOUT US',
    aboutCompany: 'LT STUDIO SINGLE MEMBER LIMITED LIABILITY COMPANY',
    aboutLTStudioTitle: 'About LT Studio',
    aboutLTStudioDesc1: 'LT Studio is an entertainment and media video production studio in Vietnam, serving businesses, brands and content creators.',
    aboutLTStudioDesc2: 'With more than 9 years of experience, we produce commercials, TVCs, short films, event videos and digital content through one end-to-end process from concept to post-production.',
    getStarted: 'GET STARTED →',
    missionDesc1: 'With more than 9 years of experience, LT Studio works alongside businesses, brands and creators to turn ideas into commercials, TVCs, short films and entertainment content that captures audiences. Our mission is to make video production clear, focused and effective at every scale.',
    missionDesc2: 'We believe every brand has a story worth telling. With LT Studio, you don\'t just get a video — you get a media product that helps your brand reach the right audience.',
    releaseFirstSingleNow: 'START YOUR PROJECT',
    whyChooseLTStudio: 'Why Choose LT Studio',
    globalReach: 'Multi-Platform',
    globalReachDesc: 'Videos are produced and optimized for every platform — YouTube, social media, event screens and your website — so your content reaches the right audience.',
    fairCompensation: 'One Team, End-to-End',
    fairCompensationDesc: 'From concept and scripting to filming, editing and post-production, you work with a single team across the entire production journey.',
    userFriendlyPlatform: 'Professional Crew',
    userFriendlyPlatformDesc: 'An experienced production and media team focused on what matters most — telling your brand story in a compelling way.',
    supportiveCommunity: 'A Long-Term Partner',
    supportiveCommunityDesc: 'Beyond the finished product, we help plan your content and optimize it so your brand grows sustainably over time.',
    anyQuestions: 'Any questions? Give me a message',
    contactLTStudioHere: 'CONTACT WITH LT STUDIO HERE !',
    
    // FAQ page
    faqTitle: 'Frequently Asked Questions',
    faqDescription: 'Have a question? Check out our most commonly asked questions to help you get answers fast. Have a question that you don\'t see answered here? Reach out to us and our customer support team will help!',
    moreQuestion: 'MORE QUESTION',
    faqSectionTitle: 'Frequently Asked Questions',
    contactWithUsTitle: 'CONTACT WITH US',
    contactDescription: 'Any questions or comments? Just write us a message',
    faqQuestion1: 'What video services does LT Studio offer?',
    faqAnswer1: 'We produce commercials, TVCs, corporate and event videos, short films and entertainment content for digital platforms.',
    faqQuestion2: 'How long does a video project take?',
    faqAnswer2: 'Timing depends on the project scope. Before we begin, we agree on a clear schedule with you from brief to final delivery.',
    faqQuestion3: 'Does LT Studio handle the full production process?',
    faqAnswer3: 'Yes. One team covers the journey from concept and scripting to filming, editing and post-production.',
    faqQuestion4: 'Which platforms are the videos optimized for?',
    faqAnswer4: 'We deliver formats suited to YouTube, TikTok, Facebook, event screens and websites according to the project needs.',
    faqQuestion5: 'Can LT Studio help with content strategy?',
    faqAnswer5: 'Yes. Alongside production, we can help plan content and shape a communication direction around your brand goals.',
    faqQuestion6: 'How do I get started?',
    faqAnswer6: 'Send us your idea or brief. The LT Studio team will discuss your goals and scope, then propose an appropriate approach.',
    
    // Contact page
    contactPageTitle: 'Contact With Us',
    sendMessage: 'Send us a message',
    getStartedNowContact: 'Get Started Now',
    joinArtists: 'Contact LT Studio to start your video project today',
    addressTitle: 'ADDRESS',
    addressText: 'Tp. Nam Định (cuối đường Thái Bình, tp Nam Định)',
    openingHours: 'OPENING HOURS',
    openingHoursText: 'Mon to Sat: 7:30am - 17:00pm',
    emailTitle: 'E-MAIL',
    phoneTitle: 'PHONE NUMBER',
    faqContactTitle: 'FAQ',
    faqContactDescription: 'Any questions or comments? Just write us a message',
    interactiveMap: 'Interactive Map',
    
    // News page
    newsTitle: 'Nothing Found',
    newsDescription: 'It seems we can\'t find what you\'re looking for. Perhaps searching can help.',
    search: 'Search...',
    noContentTitle: 'No Content Available',
    noContentDescription: 'We\'re currently working on adding news and updates. Please check back later or contact us for the latest information.',
    contactUs: 'Contact Us',
    searchWidget: 'Search',
    searchPlaceholder: 'SEARCH',
    recentPosts: 'Recent Posts',
    recentComments: 'Recent Comments',
    helloWorld: 'Hello world!',
    wordpressCommenter: 'A WordPress Commenter',
    in: 'in'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('vi');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'vi' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
