export interface Article {
  id: number
  slug: string
  titleAr: string
  titleEn: string
  excerptAr: string
  excerptEn: string
  content: {
    ar: string
    en: string
  }
  category: string
  categoryName: string
  date: string
  readTimeAr: string
  readTimeEn: string
  authorAr: string
  authorEn: string
  image?: string
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "family-law-guide-saudi-arabia",
    titleAr: "دليل شامل لقانون الأسرة في السعودية",
    titleEn: "Complete Guide to Family Law in Saudi Arabia",
    excerptAr: "تعرف على أهم القوانين والإجراءات المتعلقة بقضايا الأسرة والزواج والطلاق في المملكة العربية السعودية",
    excerptEn:
      "Learn about the most important laws and procedures related to family, marriage, and divorce cases in Saudi Arabia",
    content: {
      ar: `
        <h2>مقدمة عن قانون الأسرة في السعودية</h2>
        <p>يعتبر قانون الأسرة في المملكة العربية السعودية من أهم القوانين التي تنظم العلاقات الأسرية والاجتماعية. يستند هذا القانون إلى أحكام الشريعة الإسلامية ويهدف إلى حماية حقوق جميع أفراد الأسرة.</p>
        
        <h2>الزواج في القانون السعودي</h2>
        <p>ينظم القانون السعودي عقد الزواج بشكل دقيق، حيث يتطلب توفر شروط معينة لصحة العقد:</p>
        <ul>
          <li>رضا الطرفين الكامل</li>
          <li>وجود الولي للمرأة</li>
          <li>حضور شاهدين عدلين</li>
          <li>تحديد المهر</li>
        </ul>
        
        <h2>حقوق الزوجة</h2>
        <p>يكفل القانون السعودي للزوجة حقوقاً متعددة منها:</p>
        <ul>
          <li>الحق في المهر المؤجل والمعجل</li>
          <li>الحق في النفقة والسكن</li>
          <li>الحق في المعاملة الحسنة</li>
          <li>الحق في طلب الطلاق في حالات معينة</li>
        </ul>
        
        <h2>الطلاق وأحكامه</h2>
        <p>ينظم القانون السعودي أحكام الطلاق بدقة، ويشمل أنواع الطلاق المختلفة:</p>
        <ul>
          <li>الطلاق الرجعي</li>
          <li>الطلاق البائن</li>
          <li>الخلع</li>
          <li>المباراة</li>
        </ul>
        
        <h2>حضانة الأطفال</h2>
        <p>تعتبر حضانة الأطفال من أهم القضايا في قانون الأسرة، حيث يحدد القانون أولوية الحضانة كالتالي:</p>
        <ul>
          <li>الأم لها الأولوية في حضانة الأطفال الصغار</li>
          <li>الأب له حق الولاية والإشراف</li>
          <li>مراعاة مصلحة الطفل الفضلى</li>
        </ul>
        
        <h2>النفقة والمؤونة</h2>
        <p>يلزم القانون السعودي الزوج بالإنفاق على زوجته وأطفاله، وتشمل النفقة:</p>
        <ul>
          <li>نفقة الطعام والشراب</li>
          <li>نفقة الكسوة</li>
          <li>نفقة السكن</li>
          <li>النفقة الطبية</li>
        </ul>
        
        <h2>الميراث في قانون الأسرة</h2>
        <p>ينظم القانون السعودي أحكام الميراث وفقاً للشريعة الإسلامية، مع مراعاة حقوق جميع الورثة الشرعيين.</p>
        
        <h2>خلاصة</h2>
        <p>قانون الأسرة في السعودية شامل ومتكامل، ويهدف إلى حماية حقوق جميع أفراد الأسرة. من المهم الاستعانة بمحامٍ متخصص عند التعامل مع أي قضية أسرية لضمان حماية حقوقك القانونية.</p>
      `,
      en: `
        <h2>Introduction to Family Law in Saudi Arabia</h2>
        <p>Family law in the Kingdom of Saudi Arabia is one of the most important laws governing family and social relationships. This law is based on Islamic Sharia principles and aims to protect the rights of all family members.</p>
        
        <h2>Marriage in Saudi Law</h2>
        <p>Saudi law regulates marriage contracts precisely, requiring certain conditions for the validity of the contract:</p>
        <ul>
          <li>Full consent of both parties</li>
          <li>Presence of the woman's guardian (wali)</li>
          <li>Presence of two just witnesses</li>
          <li>Determination of the dowry (mahr)</li>
        </ul>
        
        <h2>Wife's Rights</h2>
        <p>Saudi law guarantees multiple rights for the wife, including:</p>
        <ul>
          <li>Right to deferred and immediate dowry</li>
          <li>Right to maintenance and housing</li>
          <li>Right to good treatment</li>
          <li>Right to request divorce in certain cases</li>
        </ul>
        
        <h2>Divorce and Its Rulings</h2>
        <p>Saudi law precisely regulates divorce rulings and includes different types of divorce:</p>
        <ul>
          <li>Revocable divorce (Raj'i)</li>
          <li>Irrevocable divorce (Ba'in)</li>
          <li>Khula (wife-initiated divorce)</li>
          <li>Mubarat (mutual consent divorce)</li>
        </ul>
        
        <h2>Child Custody</h2>
        <p>Child custody is one of the most important issues in family law, where the law determines custody priority as follows:</p>
        <ul>
          <li>Mother has priority in custody of young children</li>
          <li>Father has guardianship and supervision rights</li>
          <li>Consideration of the child's best interests</li>
        </ul>
        
        <h2>Maintenance and Support</h2>
        <p>Saudi law requires the husband to provide for his wife and children, and maintenance includes:</p>
        <ul>
          <li>Food and drink expenses</li>
          <li>Clothing expenses</li>
          <li>Housing expenses</li>
          <li>Medical expenses</li>
        </ul>
        
        <h2>Inheritance in Family Law</h2>
        <p>Saudi law regulates inheritance rulings according to Islamic Sharia, taking into account the rights of all legitimate heirs.</p>
        
        <h2>Conclusion</h2>
        <p>Family law in Saudi Arabia is comprehensive and integrated, aiming to protect the rights of all family members. It is important to consult with a specialized lawyer when dealing with any family case to ensure protection of your legal rights.</p>
      `,
    },
    category: "family",
    categoryName: "قانون الأسرة / Family Law",
    date: "2024-01-15",
    readTimeAr: "5 دقائق",
    readTimeEn: "5 min read",
    authorAr: "المحامي أحمد الراشد",
    authorEn: "Lawyer Ahmed Al-Rashid",
    image: "/placeholder.svg?height=400&width=800&text=Family+Law+Guide",
  },
  {
    id: 2,
    slug: "company-establishment-saudi-arabia",
    titleAr: "كيفية تأسيس شركة في السعودية",
    titleEn: "How to Establish a Company in Saudi Arabia",
    excerptAr: "خطوات مفصلة لتأسيس شركة في المملكة العربية السعودية مع شرح المتطلبات القانونية والإجراءات اللازمة",
    excerptEn:
      "Detailed steps to establish a company in Saudi Arabia with explanation of legal requirements and necessary procedures",
    content: {
      ar: `
        <h2>مقدمة عن تأسيس الشركات في السعودية</h2>
        <p>تشهد المملكة العربية السعودية نمواً اقتصادياً متسارعاً، مما يجعل تأسيس الشركات فرصة استثمارية مميزة. يوفر النظام السعودي بيئة قانونية محفزة للاستثمار مع إجراءات مبسطة.</p>
        
        <h2>أنواع الشركات في السعودية</h2>
        <p>يمكن تأسيس عدة أنواع من الشركات في المملكة:</p>
        <ul>
          <li>الشركة ذات المسؤولية المحدودة</li>
          <li>شركة المساهمة المقفلة</li>
          <li>شركة المساهمة المفتوحة</li>
          <li>شركة التضامن</li>
          <li>شركة التوصية البسيطة</li>
          <li>الشركة المهنية</li>
        </ul>
        
        <h2>متطلبات تأسيس الشركة</h2>
        <p>لتأسيس شركة في السعودية، يجب توفر المتطلبات التالية:</p>
        <ul>
          <li>اسم تجاري مميز وغير مستخدم</li>
          <li>رأس مال كافٍ حسب نوع الشركة</li>
          <li>عنوان مقر الشركة</li>
          <li>تحديد نشاط الشركة</li>
          <li>هوية الشركاء أو المؤسسين</li>
        </ul>
        
        <h2>خطوات التأسيس</h2>
        <p>تتم عملية تأسيس الشركة من خلال الخطوات التالية:</p>
        <ol>
          <li>حجز الاسم التجاري في وزارة التجارة</li>
          <li>إعداد عقد التأسيس والنظام الأساسي</li>
          <li>فتح حساب بنكي وإيداع رأس المال</li>
          <li>الحصول على السجل التجاري</li>
          <li>التسجيل في الزكاة والضريبة</li>
          <li>الحصول على تراخيص النشاط المطلوبة</li>
        </ol>
        
        <h2>الوثائق المطلوبة</h2>
        <p>يجب تحضير الوثائق التالية:</p>
        <ul>
          <li>طلب تأسيس الشركة</li>
          <li>عقد التأسيس موثق</li>
          <li>النظام الأساسي للشركة</li>
          <li>إثبات إيداع رأس المال</li>
          <li>عقد إيجار المقر</li>
          <li>هويات الشركاء</li>
        </ul>
        
        <h2>التكاليف والرسوم</h2>
        <p>تختلف تكاليف تأسيس الشركة حسب نوعها وحجمها، وتشمل:</p>
        <ul>
          <li>رسوم حجز الاسم التجاري</li>
          <li>رسوم السجل التجاري</li>
          <li>رسوم التوثيق</li>
          <li>أتعاب المحاماة والاستشارة</li>
        </ul>
        
        <h2>نصائح مهمة</h2>
        <p>للنجاح في تأسيس شركتك، اتبع هذه النصائح:</p>
        <ul>
          <li>استعن بمحامٍ متخصص في قانون الشركات</li>
          <li>ادرس السوق جيداً قبل التأسيس</li>
          <li>تأكد من الامتثال لجميع الأنظمة</li>
          <li>احتفظ بنسخ من جميع الوثائق</li>
        </ul>
        
        <h2>خلاصة</h2>
        <p>تأسيس شركة في السعودية عملية منظمة ومبسطة، لكنها تتطلب الالتزام بالإجراءات القانونية. الاستعانة بخبير قانوني يضمن إتمام العملية بنجاح وتجنب أي مشاكل مستقبلية.</p>
      `,
      en: `
        <h2>Introduction to Company Establishment in Saudi Arabia</h2>
        <p>The Kingdom of Saudi Arabia is experiencing rapid economic growth, making company establishment an exceptional investment opportunity. The Saudi system provides a stimulating legal environment for investment with simplified procedures.</p>
        
        <h2>Types of Companies in Saudi Arabia</h2>
        <p>Several types of companies can be established in the Kingdom:</p>
        <ul>
          <li>Limited Liability Company (LLC)</li>
          <li>Closed Joint Stock Company</li>
          <li>Public Joint Stock Company</li>
          <li>General Partnership</li>
          <li>Limited Partnership</li>
          <li>Professional Company</li>
        </ul>
        
        <h2>Company Establishment Requirements</h2>
        <p>To establish a company in Saudi Arabia, the following requirements must be met:</p>
        <ul>
          <li>Unique and unused trade name</li>
          <li>Sufficient capital according to company type</li>
          <li>Company headquarters address</li>
          <li>Definition of company activity</li>
          <li>Identity of partners or founders</li>
        </ul>
        
        <h2>Establishment Steps</h2>
        <p>The company establishment process follows these steps:</p>
        <ol>
          <li>Reserve trade name at Ministry of Commerce</li>
          <li>Prepare incorporation contract and articles of association</li>
          <li>Open bank account and deposit capital</li>
          <li>Obtain commercial registration</li>
          <li>Register with Zakat and Tax Authority</li>
          <li>Obtain required activity licenses</li>
        </ol>
        
        <h2>Required Documents</h2>
        <p>The following documents must be prepared:</p>
        <ul>
          <li>Company establishment application</li>
          <li>Notarized incorporation contract</li>
          <li>Company articles of association</li>
          <li>Proof of capital deposit</li>
          <li>Headquarters lease contract</li>
          <li>Partners' identities</li>
        </ul>
        
        <h2>Costs and Fees</h2>
        <p>Company establishment costs vary according to type and size, including:</p>
        <ul>
          <li>Trade name reservation fees</li>
          <li>Commercial registration fees</li>
          <li>Notarization fees</li>
          <li>Legal and consultation fees</li>
        </ul>
        
        <h2>Important Tips</h2>
        <p>To succeed in establishing your company, follow these tips:</p>
        <ul>
          <li>Consult with a lawyer specialized in corporate law</li>
          <li>Study the market thoroughly before establishment</li>
          <li>Ensure compliance with all regulations</li>
          <li>Keep copies of all documents</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Establishing a company in Saudi Arabia is an organized and simplified process, but it requires adherence to legal procedures. Consulting with a legal expert ensures successful completion and avoids future problems.</p>
      `,
    },
    category: "business",
    categoryName: "القانون التجاري / Business Law",
    date: "2024-01-10",
    readTimeAr: "7 دقائق",
    readTimeEn: "7 min read",
    authorAr: "المحامي أحمد الراشد",
    authorEn: "Lawyer Ahmed Al-Rashid",
    image: "/placeholder.svg?height=400&width=800&text=Business+Formation",
  },
  {
    id: 3,
    slug: "tenant-landlord-rights-saudi-law",
    titleAr: "حقوق المستأجر والمؤجر في القانون السعودي",
    titleEn: "Tenant and Landlord Rights in Saudi Law",
    excerptAr: "دليل شامل لحقوق وواجبات المستأجر والمؤجر وفقاً لنظام الإيجار الجديد في المملكة العربية السعودية",
    excerptEn:
      "Comprehensive guide to tenant and landlord rights and obligations according to the new rental system in Saudi Arabia",
    content: {
      ar: `
        <h2>نظام الإيجار الجديد في السعودية</h2>
        <p>صدر نظام الإيجار الجديد في المملكة العربية السعودية لتنظيم العلاقة بين المؤجر والمستأجر وحماية حقوق الطرفين. يهدف هذا النظام إلى تحقيق العدالة والشفافية في عقود الإيجار.</p>
        
        <h2>حقوق المستأجر</h2>
        <p>يكفل النظام الجديد للمستأجر حقوقاً متعددة منها:</p>
        <ul>
          <li>الحق في الانتفاع بالعين المؤجرة</li>
          <li>الحق في الحصول على عقد إيجار مكتوب</li>
          <li>الحق في عدم زيادة الأجرة إلا وفق الضوابط المحددة</li>
          <li>الحق في الصيانة الأساسية من المؤجر</li>
          <li>الحق في الخصوصية وعدم دخول المؤجر بدون إذن</li>
          <li>الحق في تجديد العقد في حالات معينة</li>
        </ul>
        
        <h2>واجبات المستأجر</h2>
        <p>يلتزم المستأجر بواجبات محددة منها:</p>
        <ul>
          <li>دفع الأجرة في المواعيد المحددة</li>
          <li>المحافظة على العين المؤجرة</li>
          <li>عدم إجراء تعديلات جوهرية بدون إذن</li>
          <li>استخدام العقار للغرض المتفق عليه</li>
          <li>إخلاء العقار عند انتهاء العقد</li>
        </ul>
        
        <h2>حقوق المؤجر</h2>
        <p>يضمن النظام للمؤجر حقوقاً أساسية منها:</p>
        <ul>
          <li>الحق في الحصول على الأجرة المتفق عليها</li>
          <li>الحق في استرداد العقار عند انتهاء العقد</li>
          <li>الحق في زيادة الأجرة وفق الضوابط المحددة</li>
          <li>الحق في فسخ العقد في حالات الإخلال</li>
          <li>الحق في التعويض عن الأضرار</li>
        </ul>
        
        <h2>واجبات المؤجر</h2>
        <p>يلتزم المؤجر بواجبات قانونية منها:</p>
        <ul>
          <li>تسليم العقار في حالة صالحة للاستعمال</li>
          <li>القيام بالصيانة الأساسية</li>
          <li>عدم التدخل في انتفاع المستأجر</li>
          <li>احترام خصوصية المستأجر</li>
          <li>تقديم عقد إيجار مكتوب</li>
        </ul>
        
        <h2>زيادة الأجرة</h2>
        <p>ينظم النظام الجديد زيادة الأجرة كالتالي:</p>
        <ul>
          <li>لا يجوز زيادة الأجرة خلال السنة الأولى</li>
          <li>الزيادة السنوية لا تتجاوز 5% من قيمة الأجرة</li>
          <li>يجب إشعار المستأجر بالزيادة قبل 90 يوماً</li>
          <li>يحق للمستأجر الاعتراض على الزيادة</li>
        </ul>
        
        <h2>إنهاء عقد الإيجار</h2>
        <p>يمكن إنهاء عقد الإيجار في الحالات التالية:</p>
        <ul>
          <li>انتهاء مدة العقد المحددة</li>
          <li>اتفاق الطرفين على الإنهاء</li>
          <li>إخلال أحد الطرفين بالتزاماته</li>
          <li>الحاجة الشخصية للمؤجر (وفق شروط محددة)</li>
        </ul>
        
        <h2>حل النزاعات</h2>
        <p>في حالة نشوء نزاع، يمكن اللجوء إلى:</p>
        <ul>
          <li>لجان فض منازعات الإيجار</li>
          <li>المحاكم المختصة</li>
          <li>الوساطة والتحكيم</li>
        </ul>
        
        <h2>خلاصة</h2>
        <p>نظام الإيجار الجديد يوفر حماية متوازنة لحقوق المؤجر والمستأجر. من المهم فهم هذه الحقوق والواجبات لتجنب النزاعات وضمان علاقة إيجارية ناجحة.</p>
      `,
      en: `
        <h2>New Rental System in Saudi Arabia</h2>
        <p>The new rental system was issued in the Kingdom of Saudi Arabia to regulate the relationship between landlord and tenant and protect the rights of both parties. This system aims to achieve justice and transparency in rental contracts.</p>
        
        <h2>Tenant Rights</h2>
        <p>The new system guarantees multiple rights for tenants, including:</p>
        <ul>
          <li>Right to use the leased property</li>
          <li>Right to obtain a written lease contract</li>
          <li>Right to rent increases only according to specified controls</li>
          <li>Right to basic maintenance from the landlord</li>
          <li>Right to privacy and landlord entry only with permission</li>
          <li>Right to contract renewal in certain cases</li>
        </ul>
        
        <h2>Tenant Obligations</h2>
        <p>Tenants are committed to specific obligations including:</p>
        <ul>
          <li>Pay rent on specified dates</li>
          <li>Maintain the leased property</li>
          <li>No substantial modifications without permission</li>
          <li>Use property for agreed purpose</li>
          <li>Vacate property upon contract termination</li>
        </ul>
        
        <h2>Landlord Rights</h2>
        <p>The system guarantees basic rights for landlords including:</p>
        <ul>
          <li>Right to receive agreed rent</li>
          <li>Right to recover property upon contract termination</li>
          <li>Right to increase rent according to specified controls</li>
          <li>Right to terminate contract in case of breach</li>
          <li>Right to compensation for damages</li>
        </ul>
        
        <h2>Landlord Obligations</h2>
        <p>Landlords are committed to legal obligations including:</p>
        <ul>
          <li>Deliver property in suitable condition for use</li>
          <li>Perform basic maintenance</li>
          <li>Not interfere with tenant's use</li>
          <li>Respect tenant's privacy</li>
          <li>Provide written lease contract</li>
        </ul>
        
        <h2>Rent Increases</h2>
        <p>The new system regulates rent increases as follows:</p>
        <ul>
          <li>No rent increase allowed during first year</li>
          <li>Annual increase not exceeding 5% of rent value</li>
          <li>Tenant must be notified 90 days before increase</li>
          <li>Tenant has right to object to increase</li>
        </ul>
        
        <h2>Lease Termination</h2>
        <p>Lease contracts can be terminated in the following cases:</p>
        <ul>
          <li>Expiration of specified contract period</li>
          <li>Mutual agreement between parties</li>
          <li>Breach of obligations by either party</li>
          <li>Personal need of landlord (under specific conditions)</li>
        </ul>
        
        <h2>Dispute Resolution</h2>
        <p>In case of disputes, parties can resort to:</p>
        <ul>
          <li>Rental dispute resolution committees</li>
          <li>Competent courts</li>
          <li>Mediation and arbitration</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The new rental system provides balanced protection for both landlord and tenant rights. Understanding these rights and obligations is important to avoid disputes and ensure a successful rental relationship.</p>
      `,
    },
    category: "real-estate",
    categoryName: "العقارات / Real Estate",
    date: "2024-01-05",
    readTimeAr: "6 دقائق",
    readTimeEn: "6 min read",
    authorAr: "المحامي أحمد الراشد",
    authorEn: "Lawyer Ahmed Al-Rashid",
    image: "/placeholder.svg?height=400&width=800&text=Real+Estate+Rights",
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getRelatedArticles(currentSlug: string, category: string, limit = 3): Article[] {
  return articles.filter((article) => article.slug !== currentSlug && article.category === category).slice(0, limit)
}

export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
