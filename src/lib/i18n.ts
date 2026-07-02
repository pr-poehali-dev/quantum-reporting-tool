export type Lang = "en" | "ru" | "ua" | "de"

export const translations = {
  en: {
    nav: {
      packages: "Packages",
      tournaments: "Tournaments",
      faq: "FAQ",
      buyTicket: "Buy Ticket",
    },
    hero: {
      subtitle: "Tickets & packages for Standoff 2 tournaments. Play, win, collect prizes.",
    },
    features: {
      heading: "Why Choose Us",
      sub: "Everything for a great Standoff 2 tournament experience — from fair matches to real prizes",
      items: [
        { title: "Instant Access", description: "Ticket and tournament entry arrive right after payment. No queues — just join and play.", badge: "Fast" },
        { title: "Real Prizes", description: "Cash prize pools, rare skins and in-game currency for winners of every tournament.", badge: "Rewards" },
        { title: "Fair Play", description: "Anti-cheat and moderation on all matches. Results are recorded automatically, no cheating.", badge: "Fair Play" },
        { title: "Exclusive Skins", description: "Packages with unique weapon, knife and glove skins you won't find in the regular store.", badge: "Exclusive" },
        { title: "Ranked Tournaments", description: "From beginners to pros — we match opponents by rank so every game stays exciting.", badge: "Balanced" },
        { title: "Secure Payment", description: "Pay for tickets by card or e-wallet. Full refund available before the tournament starts.", badge: "Secure" },
      ],
    },
    packages: {
      badge: "Package Marketplace",
      heading: "Choose Your Package",
      sub: "Standoff 2 tournament tickets with bonuses, skins and increased prize pools. The higher the package — the more perks you get.",
      popular: "Most Popular",
      buyBtn: "Buy Package",
      items: [
        { tagline: "Start your journey", perks: ["1 ticket to an online tournament", "Starter case with a skin", "Access to the general Discord", "Match statistics"] },
        { tagline: "Players' choice", perks: ["3 tickets to any-level tournaments", "Rare knife + gloves skin", "Priority registration", "Increased prize pool x1.5", "Exclusive profile badge"] },
        { tagline: "Maximum rewards", perks: ["Unlimited tickets for a month", "Legendary skin bundle", "Slot in the pro league", "Prize pool x2 + cashback", "First pick on rematch"] },
      ],
    },
    timeline: {
      heading: "Tournament Formats",
      sub: "From daily quick matches to major finals with prize pools — choose the tournament that fits your skill level and playstyle in Standoff 2.",
      items: [
        {
          title: "Daily Tournaments",
          desc: "Fast online tournaments every day for players of any skill level. Jump in after work or school, assemble your team and fight for prizes today.",
          bullets: ["1v1, 2v2 and 5v5 formats", "Rank-based matchmaking", "Instant start with your ticket"],
        },
        {
          title: "Weekly Leagues",
          desc: "Match series with a leaderboard and growing prize pool. Climb the league, earn points and collect exclusive skins for your top placement.",
          bullets: ["Rating system and seasons", "Rewards for top-10 finishes", "Available with Pro & Legend Pass"],
        },
        {
          title: "Pro Tournaments & Finals",
          desc: "Major tournaments with large cash prizes and live streams. The best teams battle for the title while viewers follow every match in real time.",
          bullets: ["Cash prize pool", "Live match broadcasts", "League slot via Legend Pass"],
        },
      ],
    },
    testimonials: {
      heading: "Player Reviews",
      sub: "What players who already compete and win prizes have to say",
      items: [
        { role: "Pro Tournament Winner", content: "Got the Pro Pass for priority registration — and a week later won my first cash tournament. Prizes land instantly!" },
        { role: "Captain of NoScope", content: "Put together a squad through the marketplace, bought Legend Pass for everyone. Top skins, fair leagues, balanced opponents. Highly recommend." },
        { role: "Streamer & Standoff 2 Player", content: "Started with the Rookie Pass at 299₽ just to try it out. Got hooked and now I play every day. Perfect entry into tournaments." },
      ],
    },
    faq: {
      heading: "FAQ",
      sub: "Answers to common questions about tickets, packages and participating in Standoff 2 tournaments.",
      items: [
        { q: "How do I buy a tournament ticket?", a: "Choose a package in the Packages section, click Buy and pay using your preferred method. Your ticket and tournament access are delivered instantly after payment." },
        { q: "What's included in the packages?", a: "Depending on the package level you get a tournament ticket, in-game bonuses, priority registration, exclusive skins and an increased prize pool." },
        { q: "Can I get a refund?", a: "Yes, you can return your ticket before the tournament starts. After matches begin refunds are not available, but you can transfer your ticket to another player." },
        { q: "How do Standoff 2 tournaments work?", a: "Tournaments run online in single-elimination bracket or round-robin format. The schedule and rules are published in advance and results are recorded automatically." },
        { q: "How are prizes paid out?", a: "The prize pool is distributed among winners immediately after the tournament ends and credited to your game or payment account within 24 hours." },
        { q: "Who can participate?", a: "Any Standoff 2 player with an active account can join. Some packages include ranked tournaments — from beginners to pro players." },
      ],
    },
    cta: {
      heading: "Ready to hit the arena?",
      sub: "Join thousands of players already competing for prizes in Standoff 2 tournaments. Grab your ticket and prove you're the best.",
      buy: "Buy Ticket",
      choose: "Choose Package",
    },
    footer: {
      desc: "Marketplace for Standoff 2 tournament tickets and packages. Compete for prizes with the best players.",
      market: "Market",
      company: "Company",
      links: { packages: "Packages", tournaments: "Tournaments", tickets: "Tickets", faq: "FAQ" },
      company_links: { about: "About", careers: "Careers", press: "Press", contact: "Contact" },
      rights: "2025 Standoff Arena. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms of Use",
      cookie: "Cookie Policy",
    },
  },

  ru: {
    nav: { packages: "Пакеты", tournaments: "Турниры", faq: "Вопросы", buyTicket: "Купить билет" },
    hero: { subtitle: "Билеты и пакеты на турниры Standoff 2. Играй, побеждай, забирай призы." },
    features: {
      heading: "Почему выбирают нас",
      sub: "Всё для комфортной игры на турнирах Standoff 2 — от честных матчей до реальных призов",
      items: [
        { title: "Мгновенный доступ", description: "Билет и вход на турнир приходят сразу после оплаты. Никаких очередей — заходи и играй.", badge: "Быстро" },
        { title: "Реальные призы", description: "Денежный призовой фонд, редкие скины и внутриигровая валюта для победителей каждого турнира.", badge: "Награды" },
        { title: "Честная игра", description: "Античит и модерация на всех матчах. Результаты фиксируются автоматически, без накруток.", badge: "Fair Play" },
        { title: "Эксклюзивные скины", description: "Пакеты с уникальными скинами на оружие, ножи и перчатки, которых нет в обычном магазине.", badge: "Эксклюзив" },
        { title: "Турниры по уровням", description: "От новичков до про-игроков — подбираем соперников по рангу, чтобы игра была интересной.", badge: "Баланс" },
        { title: "Безопасная оплата", description: "Оплачивай билеты картой, СБП или кошельком. Возврат до старта турнира без вопросов.", badge: "Защита" },
      ],
    },
    packages: {
      badge: "Маркетплейс пакетов",
      heading: "Выбери свой пакет",
      sub: "Билеты на турниры Standoff 2 с бонусами, скинами и увеличенным призовым фондом. Чем выше пакет — тем больше приколов.",
      popular: "Популярный",
      buyBtn: "Купить пакет",
      items: [
        { tagline: "Старт в турнирах", perks: ["1 билет на онлайн-турнир", "Стартовый кейс со скином", "Доступ в общий Discord", "Статистика матчей"] },
        { tagline: "Выбор игроков", perks: ["3 билета на турниры любого уровня", "Редкий скин на нож + перчатки", "Приоритетная регистрация", "Увеличенный призовой фонд x1.5", "Эксклюзивный значок профиля"] },
        { tagline: "Максимум наград", perks: ["Безлимит билетов на месяц", "Легендарный набор скинов", "Слот в про-лиге", "Призовой фонд x2 + кэшбек", "Вывод первым при повторе матча"] },
      ],
    },
    timeline: {
      heading: "Форматы турниров",
      sub: "От ежедневных быстрых матчей до крупных финалов с призовым фондом — выбирай турнир под свой уровень и стиль игры в Standoff 2.",
      items: [
        { title: "Ежедневные турниры", desc: "Быстрые онлайн-турниры каждый день для игроков любого уровня. Заходи после работы или учёбы, собирай команду и сражайся за призы уже сегодня.", bullets: ["Форматы 1x1, 2x2 и 5x5", "Подбор соперников по рангу", "Мгновенный старт по билету"] },
        { title: "Еженедельные лиги", desc: "Серии матчей с рейтинговой таблицей и накопительным призовым фондом. Поднимайся по лиге, зарабатывай очки и получай эксклюзивные скины за место в топе.", bullets: ["Рейтинговая система и сезоны", "Награды за топ-10 таблицы", "Доступ по Pro и Legend пакетам"] },
        { title: "Про-турниры и финалы", desc: "Крупные турниры с большим денежным фондом и трансляциями. Лучшие команды сражаются за титул, а зрители следят за матчами в прямом эфире.", bullets: ["Денежный призовой фонд", "Прямые трансляции матчей", "Слот в лиге по Legend Pass"] },
      ],
    },
    testimonials: {
      heading: "Отзывы игроков",
      sub: "Что говорят те, кто уже играет на турнирах и забирает призы",
      items: [
        { role: "Победитель Pro-турнира", content: "Взял Pro Pass ради приоритетной регистрации — и уже через неделю выиграл первый денежный турнир. Призы приходят моментально!" },
        { role: "Капитан команды NoScope", content: "Собрал команду через маркет, купили Legend Pass на всех. Скины топовые, лиги честные, соперники по уровню. Рекомендую." },
        { role: "Стример и игрок Standoff 2", content: "Начинал с Rookie Pass за 299₽, чтобы попробовать. Затянуло так, что теперь играю каждый день. Идеальный старт в турнирах." },
      ],
    },
    faq: {
      heading: "Частые вопросы",
      sub: "Ответы на популярные вопросы о билетах, пакетах и участии в турнирах Standoff 2.",
      items: [
        { q: "Как купить билет на турнир?", a: "Выбери подходящий пакет в разделе «Пакеты», нажми «Купить» и оплати удобным способом. Билет и доступ к турниру придут моментально после оплаты." },
        { q: "Что входит в пакеты?", a: "В зависимости от уровня пакета ты получаешь билет на турнир, внутриигровые бонусы, приоритетную регистрацию, эксклюзивные скины и увеличенный призовой фонд." },
        { q: "Можно ли вернуть билет?", a: "Да, билет можно вернуть до начала турнира. После старта матчей возврат средств не производится, но билет можно передать другому игроку." },
        { q: "Как проходят турниры Standoff 2?", a: "Турниры проходят онлайн в формате сеток на выбывание или round-robin. Расписание и правила публикуются заранее, а результаты фиксируются автоматически." },
        { q: "Как выплачиваются призы?", a: "Призовой фонд распределяется между победителями сразу после завершения турнира и зачисляется на игровой или платёжный аккаунт в течение 24 часов." },
        { q: "Кто может участвовать?", a: "Участвовать может любой игрок Standoff 2 с активным аккаунтом. Для некоторых пакетов предусмотрены турниры по уровням — от новичков до про-игроков." },
      ],
    },
    cta: { heading: "Готов выйти на арену?", sub: "Присоединяйся к тысячам игроков, которые уже сражаются за призы на турнирах Standoff 2. Забирай свой билет и докажи, кто здесь лучший.", buy: "Купить билет", choose: "Выбрать пакет" },
    footer: {
      desc: "Маркетплейс билетов и пакетов на турниры Standoff 2. Сражайся за призы вместе с лучшими игроками.",
      market: "Маркет", company: "Компания",
      links: { packages: "Пакеты", tournaments: "Турниры", tickets: "Билеты", faq: "Вопросы" },
      company_links: { about: "О нас", careers: "Карьера", press: "Пресса", contact: "Контакты" },
      rights: "2025 Standoff Arena. Все права защищены.",
      privacy: "Конфиденциальность", terms: "Условия использования", cookie: "Cookie-политика",
    },
  },

  ua: {
    nav: { packages: "Пакети", tournaments: "Турніри", faq: "Питання", buyTicket: "Купити квиток" },
    hero: { subtitle: "Квитки та пакети на турніри Standoff 2. Грай, перемагай, забирай призи." },
    features: {
      heading: "Чому обирають нас",
      sub: "Все для комфортної гри на турнірах Standoff 2 — від чесних матчів до реальних призів",
      items: [
        { title: "Миттєвий доступ", description: "Квиток і вхід на турнір надходять одразу після оплати. Без черг — заходь і грай.", badge: "Швидко" },
        { title: "Реальні призи", description: "Грошовий призовий фонд, рідкісні скіни та внутрішньоігрова валюта для переможців кожного турніру.", badge: "Нагороди" },
        { title: "Чесна гра", description: "Античіт і модерація на всіх матчах. Результати фіксуються автоматично, без накруток.", badge: "Fair Play" },
        { title: "Ексклюзивні скіни", description: "Пакети з унікальними скінами на зброю, ножі та рукавички, яких немає у звичайному магазині.", badge: "Ексклюзив" },
        { title: "Турніри за рівнями", description: "Від новачків до про-гравців — підбираємо суперників за рангом, щоб гра була цікавою.", badge: "Баланс" },
        { title: "Безпечна оплата", description: "Оплачуй квитки карткою або гаманцем. Повернення до старту турніру без питань.", badge: "Захист" },
      ],
    },
    packages: {
      badge: "Маркетплейс пакетів",
      heading: "Обери свій пакет",
      sub: "Квитки на турніри Standoff 2 з бонусами, скінами та збільшеним призовим фондом. Чим вищий пакет — тим більше переваг.",
      popular: "Популярний",
      buyBtn: "Купити пакет",
      items: [
        { tagline: "Старт у турнірах", perks: ["1 квиток на онлайн-турнір", "Стартовий кейс зі скіном", "Доступ до загального Discord", "Статистика матчів"] },
        { tagline: "Вибір гравців", perks: ["3 квитки на турніри будь-якого рівня", "Рідкісний скін на ніж + рукавички", "Пріоритетна реєстрація", "Збільшений призовий фонд x1.5", "Ексклюзивний значок профілю"] },
        { tagline: "Максимум нагород", perks: ["Безліміт квитків на місяць", "Легендарний набір скінів", "Слот у про-лізі", "Призовий фонд x2 + кешбек", "Вивід першим при повторі матчу"] },
      ],
    },
    timeline: {
      heading: "Формати турнірів",
      sub: "Від щоденних швидких матчів до великих фіналів з призовим фондом — обирай турнір під свій рівень і стиль гри в Standoff 2.",
      items: [
        { title: "Щоденні турніри", desc: "Швидкі онлайн-турніри щодня для гравців будь-якого рівня. Заходь після роботи чи навчання, збирай команду і борись за призи вже сьогодні.", bullets: ["Формати 1x1, 2x2 та 5x5", "Підбір суперників за рангом", "Миттєвий старт за квитком"] },
        { title: "Щотижневі ліги", desc: "Серії матчів з рейтинговою таблицею та накопичувальним призовим фондом. Піднімайся по лізі, заробляй очки й отримуй ексклюзивні скіни за місце в топі.", bullets: ["Рейтингова система і сезони", "Нагороди за топ-10 таблиці", "Доступ за Pro та Legend пакетами"] },
        { title: "Про-турніри та фінали", desc: "Великі турніри з великим грошовим фондом і трансляціями. Найкращі команди борються за титул, а глядачі стежать за матчами наживо.", bullets: ["Грошовий призовий фонд", "Прямі трансляції матчів", "Слот у лізі за Legend Pass"] },
      ],
    },
    testimonials: {
      heading: "Відгуки гравців",
      sub: "Що кажуть ті, хто вже грає на турнірах і забирає призи",
      items: [
        { role: "Переможець Pro-турніру", content: "Взяв Pro Pass заради пріоритетної реєстрації — і вже через тиждень виграв перший грошовий турнір. Призи надходять миттєво!" },
        { role: "Капітан команди NoScope", content: "Зібрав команду через маркет, купили Legend Pass на всіх. Скіни топові, ліги чесні, суперники за рівнем. Рекомендую." },
        { role: "Стример і гравець Standoff 2", content: "Починав з Rookie Pass за 299₽, щоб спробувати. Затягнуло так, що тепер граю щодня. Ідеальний старт у турнірах." },
      ],
    },
    faq: {
      heading: "Часті питання",
      sub: "Відповіді на популярні питання про квитки, пакети та участь у турнірах Standoff 2.",
      items: [
        { q: "Як купити квиток на турнір?", a: "Обери відповідний пакет у розділі «Пакети», натисни «Купити» та оплати зручним способом. Квиток і доступ до турніру надійдуть миттєво після оплати." },
        { q: "Що входить до пакетів?", a: "Залежно від рівня пакету ти отримуєш квиток на турнір, внутрішньоігрові бонуси, пріоритетну реєстрацію, ексклюзивні скіни та збільшений призовий фонд." },
        { q: "Чи можна повернути квиток?", a: "Так, квиток можна повернути до початку турніру. Після старту матчів повернення коштів не проводиться, але квиток можна передати іншому гравцю." },
        { q: "Як проходять турніри Standoff 2?", a: "Турніри проходять онлайн у форматі сіток на вибування або round-robin. Розклад і правила публікуються заздалегідь, а результати фіксуються автоматично." },
        { q: "Як виплачуються призи?", a: "Призовий фонд розподіляється між переможцями одразу після завершення турніру та зараховується на ігровий або платіжний акаунт протягом 24 годин." },
        { q: "Хто може брати участь?", a: "Брати участь може будь-який гравець Standoff 2 з активним акаунтом. Для деяких пакетів передбачені турніри за рівнями — від новачків до про-гравців." },
      ],
    },
    cta: { heading: "Готовий вийти на арену?", sub: "Приєднуйся до тисяч гравців, які вже змагаються за призи на турнірах Standoff 2. Забирай свій квиток і доведи, хто тут найкращий.", buy: "Купити квиток", choose: "Обрати пакет" },
    footer: {
      desc: "Маркетплейс квитків і пакетів на турніри Standoff 2. Змагайся за призи разом з найкращими гравцями.",
      market: "Маркет", company: "Компанія",
      links: { packages: "Пакети", tournaments: "Турніри", tickets: "Квитки", faq: "Питання" },
      company_links: { about: "Про нас", careers: "Кар'єра", press: "Преса", contact: "Контакти" },
      rights: "2025 Standoff Arena. Усі права захищені.",
      privacy: "Конфіденційність", terms: "Умови використання", cookie: "Cookie-політика",
    },
  },

  de: {
    nav: { packages: "Pakete", tournaments: "Turniere", faq: "FAQ", buyTicket: "Ticket kaufen" },
    hero: { subtitle: "Tickets & Pakete für Standoff 2 Turniere. Spiele, gewinne, sammle Preise." },
    features: {
      heading: "Warum uns wählen",
      sub: "Alles für ein großartiges Standoff 2 Turniererlebnis — von fairen Matches bis zu echten Preisen",
      items: [
        { title: "Sofortzugang", description: "Ticket und Turniereintritt kommen sofort nach der Zahlung. Keine Warteschlangen — einfach einsteigen und spielen.", badge: "Schnell" },
        { title: "Echte Preise", description: "Geldpreispools, seltene Skins und In-Game-Währung für die Sieger jedes Turniers.", badge: "Preise" },
        { title: "Faires Spiel", description: "Anti-Cheat und Moderation bei allen Matches. Ergebnisse werden automatisch erfasst, kein Schummeln.", badge: "Fair Play" },
        { title: "Exklusive Skins", description: "Pakete mit einzigartigen Waffen-, Messer- und Handschuh-Skins, die es im normalen Shop nicht gibt.", badge: "Exklusiv" },
        { title: "Rangierte Turniere", description: "Von Anfängern bis zu Profis — wir matchen Gegner nach Rang, damit jedes Spiel spannend bleibt.", badge: "Ausgewogen" },
        { title: "Sichere Zahlung", description: "Bezahle Tickets per Karte oder E-Wallet. Volle Rückerstattung vor Turnierbeginn möglich.", badge: "Sicher" },
      ],
    },
    packages: {
      badge: "Paket-Marktplatz",
      heading: "Wähle dein Paket",
      sub: "Standoff 2 Turniertickets mit Boni, Skins und erhöhten Preispools. Je höher das Paket — desto mehr Vorteile.",
      popular: "Beliebteste",
      buyBtn: "Paket kaufen",
      items: [
        { tagline: "Starte deine Reise", perks: ["1 Ticket für ein Online-Turnier", "Starter-Case mit einem Skin", "Zugang zum allgemeinen Discord", "Match-Statistiken"] },
        { tagline: "Wahl der Spieler", perks: ["3 Tickets für Turniere jedes Niveaus", "Seltener Messer + Handschuh-Skin", "Prioritätsregistrierung", "Erhöhter Preispool x1.5", "Exklusives Profilabzeichen"] },
        { tagline: "Maximale Belohnungen", perks: ["Unbegrenzte Tickets für einen Monat", "Legendäres Skin-Bundle", "Slot in der Pro-Liga", "Preispool x2 + Cashback", "Erstes Pick beim Rematch"] },
      ],
    },
    timeline: {
      heading: "Turnierformate",
      sub: "Von täglichen Schnellmatches bis zu großen Finals mit Preispools — wähle das Turnier, das zu deinem Niveau und Spielstil in Standoff 2 passt.",
      items: [
        { title: "Tägliche Turniere", desc: "Schnelle Online-Turniere jeden Tag für Spieler jedes Niveaus. Spring nach der Arbeit oder Schule rein, stell dein Team zusammen und kämpfe heute um Preise.", bullets: ["1v1, 2v2 und 5v5 Formate", "Rangbasiertes Matchmaking", "Sofortiger Start mit deinem Ticket"] },
        { title: "Wöchentliche Ligen", desc: "Match-Serien mit Bestenliste und wachsendem Preispool. Steige in der Liga auf, sammle Punkte und hol dir exklusive Skins für deine Top-Platzierung.", bullets: ["Bewertungssystem und Saisons", "Belohnungen für Top-10-Platzierungen", "Verfügbar mit Pro & Legend Pass"] },
        { title: "Pro-Turniere & Finals", desc: "Große Turniere mit hohen Geldpreisen und Live-Streams. Die besten Teams kämpfen um den Titel, während Zuschauer jeden Match in Echtzeit verfolgen.", bullets: ["Geldpreispool", "Live-Match-Übertragungen", "Liga-Slot via Legend Pass"] },
      ],
    },
    testimonials: {
      heading: "Spielerbewertungen",
      sub: "Was Spieler sagen, die bereits antreten und Preise gewinnen",
      items: [
        { role: "Pro-Turniersieger", content: "Habe den Pro Pass für die Prioritätsregistrierung geholt — und eine Woche später mein erstes Geldturnier gewonnen. Preise kommen sofort!" },
        { role: "Kapitän von NoScope", content: "Habe ein Team über den Marktplatz zusammengestellt, Legend Pass für alle gekauft. Top-Skins, faire Ligen, ausgewogene Gegner. Sehr empfehlenswert." },
        { role: "Streamer & Standoff 2 Spieler", content: "Habe mit dem Rookie Pass für 299₽ angefangen, um es auszuprobieren. Bin total süchtig geworden und spiele jetzt jeden Tag. Perfekter Einstieg in Turniere." },
      ],
    },
    faq: {
      heading: "Häufige Fragen",
      sub: "Antworten auf häufige Fragen zu Tickets, Paketen und der Teilnahme an Standoff 2 Turnieren.",
      items: [
        { q: "Wie kaufe ich ein Turnierticket?", a: "Wähle ein Paket im Bereich Pakete, klicke auf Kaufen und zahle mit deiner bevorzugten Methode. Dein Ticket und Turnierzugang werden sofort nach der Zahlung geliefert." },
        { q: "Was ist in den Paketen enthalten?", a: "Je nach Paketstufe erhältst du ein Turnierticket, In-Game-Boni, Prioritätsregistrierung, exklusive Skins und einen erhöhten Preispool." },
        { q: "Kann ich eine Rückerstattung bekommen?", a: "Ja, du kannst dein Ticket vor Turnierbeginn zurückgeben. Nach Matchbeginn sind keine Rückerstattungen möglich, aber du kannst dein Ticket an einen anderen Spieler übertragen." },
        { q: "Wie funktionieren Standoff 2 Turniere?", a: "Turniere laufen online im K.o.-System oder Round-Robin-Format. Zeitplan und Regeln werden im Voraus veröffentlicht und Ergebnisse automatisch erfasst." },
        { q: "Wie werden Preise ausgezahlt?", a: "Der Preispool wird sofort nach Turnierende unter den Gewinnern aufgeteilt und innerhalb von 24 Stunden auf dein Spiel- oder Zahlungskonto gutgeschrieben." },
        { q: "Wer kann teilnehmen?", a: "Jeder Standoff 2 Spieler mit einem aktiven Konto kann mitmachen. Einige Pakete beinhalten rangierte Turniere — von Anfängern bis zu Profis." },
      ],
    },
    cta: { heading: "Bereit für die Arena?", sub: "Schließe dich Tausenden von Spielern an, die bereits in Standoff 2 Turnieren um Preise kämpfen. Hol dir dein Ticket und beweise, dass du der Beste bist.", buy: "Ticket kaufen", choose: "Paket wählen" },
    footer: {
      desc: "Marktplatz für Standoff 2 Turniertickets und Pakete. Kämpfe mit den besten Spielern um Preise.",
      market: "Markt", company: "Unternehmen",
      links: { packages: "Pakete", tournaments: "Turniere", tickets: "Tickets", faq: "FAQ" },
      company_links: { about: "Über uns", careers: "Karriere", press: "Presse", contact: "Kontakt" },
      rights: "2025 Standoff Arena. Alle Rechte vorbehalten.",
      privacy: "Datenschutz", terms: "Nutzungsbedingungen", cookie: "Cookie-Richtlinie",
    },
  },
} as const
