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
    heroSubtitle: 'Chuyên cung cấp, sản xuất các video giải trí và truyền thông',
    releaseFirstSingle: 'Liên Hệ Ngay',
    aboutUs: 'Về chúng tôi',
    aboutDescription1: 'LT Studio là một tập đoàn công nghệ - truyền thông và giải trí được thành lập tại Việt Nam và hợp tác toàn cầu. Chúng tôi tạo ra các sản phẩm công nghệ và phát triển hệ sinh thái truyền thông cho các doanh nghiệp, nghệ sĩ và người sáng tạo nội dung để đưa sản phẩm và thương hiệu của họ đến hàng triệu khách hàng và khán giả trên toàn thế giới.',
    aboutDescription2: 'Với hơn 9 năm kinh nghiệm trong việc phát triển và phân phối nội dung số, chúng tôi cung cấp nhiều dịch vụ để giúp khách hàng và đối tác của chúng tôi nổi bật trong kỷ nguyên số đang thay đổi nhanh chóng.',
    readMore: 'ĐỌC THÊM →',
    completedProjects: 'Dự án hoàn thành',
    clients: 'Khách hàng',
    yearsExperience: 'Năm kinh nghiệm',
    support: 'Hỗ trợ',
    digitalStoresTitle: '200+ Cửa hàng số khác nhau',
    digitalStoresDescription: 'LT Studio đã hợp tác với 200 dịch vụ video số và đang tiếp tục mở rộng, có mặt tại 200 quốc gia và vùng lãnh thổ trên toàn cầu. Bán video của bạn trên mọi cửa hàng số lớn như Youtube, Spotify, Apple Music, Deezer, Amazon và nhiều hơn nữa.',
    findPlanTitle: 'Tìm gói phù hợp nhất với bạn',
    findPlanDescription: 'Phân phối video đến hơn 200 cửa hàng số trên 200 quốc gia và vùng lãnh thổ trên toàn thế giới. Nhận xu hướng bán hàng hàng ngày cho Amazon, iTunes, Apple Music và Spotify, và giữ lại từng xu mà bạn được nợ từ doanh số bán hàng và phát trực tuyến.',
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
    getStartedDescription: 'Tham gia cùng các nghệ sĩ của chúng tôi và bắt đầu bán video trực tuyến ngay bây giờ',
    brandProjects: 'Dự án thương hiệu',
    brandProjectsDescription: 'Khám phá các dự án thương hiệu nổi bật mà chúng tôi đã thực hiện cho các đối tác và khách hàng',
    viewAllProjects: 'Xem tất cả dự án',
    projectPlaylist1: 'Dự án thương hiệu nổi bật',
    projectPlaylist2: 'Video quảng cáo & TVC',
    projectPlaylist3: 'Sản phẩm điện ảnh',
    projectPlaylist4: 'Nội dung sáng tạo',
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
    aboutLTStudioDesc1: 'LT Studio là một tập đoàn công nghệ - truyền thông và giải trí được thành lập tại Việt Nam và hợp tác toàn cầu. Chúng tôi tạo ra các sản phẩm công nghệ và phát triển hệ sinh thái truyền thông cho các doanh nghiệp, nghệ sĩ và người sáng tạo nội dung để đưa sản phẩm và thương hiệu của họ đến hàng triệu khách hàng và khán giả trên toàn thế giới.',
    aboutLTStudioDesc2: 'LT Studio có hơn 9 năm kinh nghiệm trong việc phát triển và phân phối nội dung số. Chúng tôi cung cấp nhiều dịch vụ để giúp khách hàng và đối tác của chúng tôi nổi bật trong kỷ nguyên số đang thay đổi nhanh chóng.',
    getStarted: 'BẮT ĐẦU →',
    missionDesc1: 'LT Studio có hơn 9 năm kinh nghiệm trong lĩnh vực phân phối âm nhạc và video, và chúng tôi đã làm việc với nhiều nghệ sĩ và phân phối âm nhạc đến hầu hết các nền tảng Streaming. Sứ mệnh của chúng tôi tại LT Studio rất đơn giản: làm cho việc phân phối âm nhạc trở nên dễ dàng, dễ tiếp cận và có lợi nhuận cho các nghệ sĩ độc lập, hãng đĩa và nhạc sĩ thuộc mọi thể loại.',
    missionDesc2: 'Chúng tôi tin rằng mọi nghệ sĩ đều nên được lắng nghe và được đền bù công bằng cho công việc của họ. Với LT Studio, bạn không chỉ phân phối âm nhạc; bạn đang khơi dậy hành trình âm nhạc của mình.',
    releaseFirstSingleNow: 'PHÁT HÀNH SINGLE ĐẦU TIÊN NGAY BÂY GIỜ',
    whyChooseLTStudio: 'Tại sao chọn LT Studio',
    globalReach: 'Phạm vi toàn cầu',
    globalReachDesc: 'Chúng tôi đã hợp tác với các nền tảng phát trực tuyến hàng đầu, cửa hàng số và nhà bán lẻ trực tuyến trên toàn thế giới để đảm bảo rằng âm nhạc của bạn tiếp cận được người hâm mộ trên toàn cầu.',
    fairCompensation: 'Đền bù công bằng',
    fairCompensationDesc: 'Chúng tôi ưu tiên thu nhập của bạn. LT Studio cung cấp một số mức phí bản quyền cạnh tranh nhất trong ngành, đảm bảo rằng bạn nhận được phần công bằng của doanh thu được tạo ra từ âm nhạc của bạn.',
    userFriendlyPlatform: 'Nền tảng thân thiện với người dùng',
    userFriendlyPlatformDesc: 'Giao diện thân thiện với người dùng của chúng tôi giúp việc tải lên và quản lý âm nhạc của bạn trở nên dễ dàng. Chúng tôi tin vào sự đơn giản và hiệu quả, cho phép bạn tập trung vào điều quan trọng nhất—âm nhạc của bạn.',
    supportiveCommunity: 'Cộng đồng hỗ trợ',
    supportiveCommunityDesc: 'Tham gia cộng đồng nghệ sĩ và những người đam mê âm nhạc của LT Studio. Chia sẻ kinh nghiệm của bạn, hợp tác với các nhạc sĩ đồng nghiệp và truy cập tài nguyên để giúp bạn phát triển sự nghiệp âm nhạc.',
    anyQuestions: 'Có câu hỏi nào? Gửi tin nhắn cho tôi',
    contactLTStudioHere: 'LIÊN HỆ VỚI LT STUDIO TẠI ĐÂY !',
    
    // FAQ page
    faqTitle: 'Câu hỏi thường gặp',
    faqDescription: 'Có câu hỏi? Xem các câu hỏi thường gặp nhất của chúng tôi để giúp bạn nhận được câu trả lời nhanh chóng. Có câu hỏi mà bạn không thấy được trả lời ở đây? Liên hệ với chúng tôi và đội ngũ hỗ trợ khách hàng của chúng tôi sẽ giúp đỡ!',
    moreQuestion: 'THÊM CÂU HỎI',
    faqSectionTitle: 'Câu hỏi thường gặp',
    contactWithUsTitle: 'LIÊN HỆ VỚI CHÚNG TÐI',
    contactDescription: 'Có câu hỏi hoặc nhận xét nào? Chỉ cần viết cho chúng tôi một tin nhắn',
    
    // Contact page
    contactPageTitle: 'Liên hệ với chúng tôi',
    sendMessage: 'Gửi tin nhắn cho chúng tôi',
    getStartedNowContact: 'Bắt đầu ngay',
    joinArtists: 'Tham gia cùng các nghệ sĩ của chúng tôi và bắt đầu bán âm nhạc trực tuyến',
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
    heroSubtitle: 'Specializing in providing and producing entertainment and media videos',
    releaseFirstSingle: 'Contact Us Now',
    aboutUs: 'About us',
    aboutDescription1: 'LT Studio is a technology - media and entertainment group established in Vietnam and cooperating globally. We create technology products and develop media ecosystems for businesses, artists and content creators to bring their products and brands to millions of customers and audiences worldwide.',
    aboutDescription2: 'With more than 9 years of experience in developing and distributing digital content, we offer a wide range of services to help our customers and partners stand out in a rapidly changing digital era.',
    readMore: 'READ MORE →',
    completedProjects: 'Completed Projects',
    clients: 'Clients',
    yearsExperience: 'Years Experience',
    support: 'Support',
    digitalStoresTitle: '200+ Different Digital Stores',
    digitalStoresDescription: 'LT Studio is partnered with 200 digital video services and counting, available across 200 countries and territories globally. Sell your video on every major digital store, like Youtube, Spotify, Apple Music, Deezer, Amazon, and more.',
    findPlanTitle: 'Find The Plan That Best Suits You',
    findPlanDescription: 'Distribute video to over 200 digital stores across 200 countries and territories worldwide. Get daily sales trends for Amazon, iTunes, Apple Music, and Spotify, and keep every cent of what you\'re owed from sales and streams.',
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
    getStartedDescription: 'Join our artists and start selling your video online now',
    brandProjects: 'Brand Projects',
    brandProjectsDescription: 'Explore our outstanding brand projects that we have created for our partners and clients',
    viewAllProjects: 'View All Projects',
    projectPlaylist1: 'Featured Brand Projects',
    projectPlaylist2: 'Advertising Videos & TVC',
    projectPlaylist3: 'Cinema Productions',
    projectPlaylist4: 'Creative Content',
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
    aboutLTStudioDesc1: 'LT Studio is a technology - media and entertainment group established in Vietnam and cooperating globally. We create technology products and develop media ecosystems for businesses, artists and content creators to bring their products and brands to millions of customers and audiences worldwide.',
    aboutLTStudioDesc2: 'LT Studio has more than 9 years of experience in developing and distributing digital content. We offer a wide range of services to help our customers and partners stand out in a rapidly changing digital era.',
    getStarted: 'GET STARTED →',
    missionDesc1: 'LT Studio has more than 9 years of experience in the field of music and video distribution, and we have been working with many artists and distributing music to most Streaming platforms. Our mission at LT Studio is simple: to make music distribution easy, accessible, and profitable for independent artists, labels, and musicians of all genres.',
    missionDesc2: 'We believe that every artist should be heard and compensated fairly for their work. With LT Studio, you\'re not just distributing music; you\'re igniting your musical journey.',
    releaseFirstSingleNow: 'RELEASE YOUR FIRST SINGLE NOW',
    whyChooseLTStudio: 'Why Choose LT Studio',
    globalReach: 'Global Reach',
    globalReachDesc: 'We have partnered with leading streaming platforms, digital stores, and online retailers worldwide to ensure that your music reaches fans across the globe.',
    fairCompensation: 'Fair Compensation',
    fairCompensationDesc: 'We prioritize your earnings. LT Studio offers some of the industry\'s most competitive royalty rates, ensuring that you receive your fair share of the revenue generated from your music.',
    userFriendlyPlatform: 'User-Friendly Platform',
    userFriendlyPlatformDesc: 'Our user-friendly interface makes uploading and managing your music a breeze. We believe in simplicity and efficiency, allowing you to focus on what matters most—your music.',
    supportiveCommunity: 'Supportive Community',
    supportiveCommunityDesc: 'Join the LT Studio community of artists and music enthusiasts. Share your experiences, collaborate with fellow musicians, and access resources to help you grow your music career.',
    anyQuestions: 'Any questions? Give me a message',
    contactLTStudioHere: 'CONTACT WITH LT STUDIO HERE !',
    
    // FAQ page
    faqTitle: 'Frequently Asked Questions',
    faqDescription: 'Have a question? Check out our most commonly asked questions to help you get answers fast. Have a question that you don\'t see answered here? Reach out to us and our customer support team will help!',
    moreQuestion: 'MORE QUESTION',
    faqSectionTitle: 'Frequently Asked Questions',
    contactWithUsTitle: 'CONTACT WITH US',
    contactDescription: 'Any questions or comments? Just write us a message',
    
    // Contact page
    contactPageTitle: 'Contact With Us',
    sendMessage: 'Send us a message',
    getStartedNowContact: 'Get Started Now',
    joinArtists: 'Join our artists and start selling your music online',
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