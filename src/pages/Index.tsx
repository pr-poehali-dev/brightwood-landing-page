import Icon from "@/components/ui/icon";

const AUTHOR_PHOTO =
  "https://cdn.poehali.dev/projects/69b9b278-6522-4ce8-bdf4-3977906c7c07/files/0283538b-9c42-478f-8aca-c65dfbf25bbd.jpg";

const BOOKS_IMAGE =
  "https://cdn.poehali.dev/projects/69b9b278-6522-4ce8-bdf4-3977906c7c07/files/36460ad1-5f38-42f8-a318-51556f6893c7.jpg";

const books = [
  {
    title: "Город чужих",
    desc: "Детектив Алина Мирт распутывает клубок городских тайн, где каждый житель что-то скрывает. Мегаполис живёт двойной жизнью — и один неверный шаг может стать последним.",
    year: "2021",
    cover: "https://cdn.poehali.dev/projects/69b9b278-6522-4ce8-bdf4-3977906c7c07/files/c05eecd1-3d57-4e9a-8519-993a670defbe.jpg",
    accent: "#1A2A3A",
  },
  {
    title: "Убийство в Эллиотт Бэй",
    desc: "Туманный порт. Найденное тело на причале. И список подозреваемых, который растёт с каждым часом. Финал не оставит равнодушным никого.",
    year: "2022",
    cover: "https://cdn.poehali.dev/projects/69b9b278-6522-4ce8-bdf4-3977906c7c07/files/88bf16df-986f-40d0-99d5-fe922e5726d6.jpg",
    accent: "#1B3040",
  },
  {
    title: "Чёрный каталог",
    desc: "Секретный архив, способный уничтожить карьеры нескольких влиятельных людей, исчезает за одну ночь. Кто успел добраться до него первым — и почему это так опасно?",
    year: "2023",
    cover: "https://cdn.poehali.dev/projects/69b9b278-6522-4ce8-bdf4-3977906c7c07/files/18d40d97-a7d8-4e66-9eb1-5c78d8d7d4d1.jpg",
    accent: "#1C1010",
  },
  {
    title: "Убийственный торнадо",
    desc: "Небольшой город накрывает стихия. Когда непогода проходит, обнаруживают труп — но улики указывают на то, что природа здесь ни при чём.",
    year: "2024",
    cover: "https://cdn.poehali.dev/projects/69b9b278-6522-4ce8-bdf4-3977906c7c07/files/8d647b68-aa55-477f-a07b-d0e364f01fff.jpg",
    accent: "#1A1520",
  },
];

const reviews = [
  {
    text: "Лана Брайтвуд держит в напряжении до последней страницы — именно так должны писаться настоящие детективы.",
    author: "Марина Светлова",
    role: "литературный критик, «Книжный мир»",
  },
  {
    text: "«Город чужих» перевернул моё представление о жанре: здесь не ищут убийцу — здесь ищут правду.",
    author: "Олег Тихонов",
    role: "читатель, Москва",
  },
  {
    text: "Каждый роман — это отдельная вселенная с безупречной атмосферой. Читаю всё подряд.",
    author: "Анна Дорохина",
    role: "блогер @books_shelf",
  },
];

const TelegramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const VkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.141 11.6 4.457 9.76 4.457 9.305c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V11.16c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.743c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.745-.576.745z" />
  </svg>
);

const SocialLink = ({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="social-icon" title={title}>
    {children}
  </a>
);

const FooterSocialLink = ({
  href,
  title,
  children,
  isMax = false,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
  isMax?: boolean;
}) => (
  <a
    href={href}
    title={title}
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "36px",
      height: "36px",
      border: "1px solid rgba(247,244,239,0.15)",
      color: "rgba(247,244,239,0.5)",
      fontFamily: isMax ? "'Cormorant', serif" : undefined,
      fontSize: isMax ? "0.9rem" : undefined,
      fontWeight: isMax ? 600 : undefined,
      textDecoration: "none",
      transition: "border-color 0.2s, color 0.2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "rgba(247,244,239,0.5)";
      e.currentTarget.style.color = "rgba(247,244,239,0.9)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(247,244,239,0.15)";
      e.currentTarget.style.color = "rgba(247,244,239,0.5)";
    }}
  >
    {children}
  </a>
);

export default function Index() {
  const scrollToBooks = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("books")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh" }}>
      {/* ── HEADER ── */}
      <header className="header-sticky">
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "1.375rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "var(--navy)",
              textDecoration: "none",
            }}
          >
            Lana Brightwood
          </a>

          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          >
            <nav style={{ display: "flex", gap: "1.75rem" }}>
              {[
                ["О писателе", "#about"],
                ["Книги", "#books"],
                ["Отзывы", "#reviews"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="nav-link">
                  {label}
                </a>
              ))}
            </nav>

            <div
              style={{ width: "1px", height: "20px", background: "var(--divider)" }}
            />

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <SocialLink href="#" title="Telegram">
                <TelegramIcon />
              </SocialLink>
              <SocialLink href="#" title="ВКонтакте">
                <VkIcon />
              </SocialLink>
              <a href="#" className="max-badge" title="Макс">
                М
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        className="hero-section"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "0",
        }}
      >
        {/* Top: большое имя */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "6rem 2rem 3rem",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            className="animate-fade-in-up"
            style={{ opacity: 0, overflow: "hidden" }}
          >
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(4.5rem, 14vw, 13rem)",
                fontWeight: 400,
                lineHeight: 0.92,
                color: "var(--text-dark)",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Лана
            </h1>
          </div>

          <div
            className="animate-fade-in-up delay-100"
            style={{
              opacity: 0,
              overflow: "hidden",
              display: "flex",
              alignItems: "baseline",
              gap: "1.5rem",
            }}
          >
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(4.5rem, 14vw, 13rem)",
                fontWeight: 400,
                lineHeight: 0.92,
                color: "transparent",
                letterSpacing: "-0.02em",
                margin: 0,
                WebkitTextStroke: "1.5px var(--text-dark)",
              }}
            >
              Брайтвуд
            </h1>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="animate-fade-in delay-400"
          style={{
            opacity: 0,
            borderTop: "1px solid var(--divider)",
            width: "100%",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "1.5rem 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <span
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: "1.125rem",
                  fontStyle: "italic",
                  color: "var(--text-mid)",
                }}
              >
                Остросюжетные детективы
              </span>
              <div className="stat-badge">
                <Icon name="BookOpen" size={13} />
                10 000+ читателей
              </div>
            </div>

            <a href="#books" className="btn-primary" onClick={scrollToBooks}>
              Смотреть книги
              <Icon name="ArrowDown" size={14} />
            </a>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "6rem 0" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "12px -12px -12px 12px",
                border: "1px solid var(--divider)",
                pointerEvents: "none",
              }}
            />
            <img
              src={AUTHOR_PHOTO}
              alt="Лана Брайтвуд"
              className="author-photo"
              style={{ width: "100%", display: "block", position: "relative", zIndex: 1 }}
            />
          </div>

          <div style={{ paddingTop: "0.5rem" }}>
            <span className="section-label">О писателе</span>
            <h2
              className="section-title"
              style={{ marginTop: "0.75rem", marginBottom: "1.75rem" }}
            >
              Между строк —
              <br />
              <em>правда</em>
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.8,
                color: "var(--text-mid)",
                maxWidth: "560px",
                marginBottom: "1.5rem",
              }}
            >
              Лана Брайтвуд пишет детективы, где каждый шаг приближает к
              разгадке. Городские тайны, психология преступления и неожиданные
              финалы. Лауреат премии «Тёмный переулок» 2023 года.
            </p>

            <div
              style={{
                display: "flex",
                gap: "2.5rem",
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--divider)",
              }}
            >
              {[
                ["4", "романа"],
                ["2023", "Лауреат"],
                ["10к+", "читателей"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "2.25rem",
                      fontWeight: 500,
                      color: "var(--navy)",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKS ── */}
      <section id="books">
        {books.map((book, i) => (
          <div
            key={book.title}
            style={{
              minHeight: "100vh",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              position: "relative",
            }}
            className="book-fullscreen"
          >
            {/* Left: cover image */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                background: book.accent,
              }}
            >
              <img
                src={book.cover}
                alt={`Обложка книги «${book.title}»`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  opacity: 0.85,
                  mixBlendMode: "luminosity",
                }}
              />
              {/* Dark overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to right, transparent 60%, ${book.accent})`,
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Right: text */}
            <div
              style={{
                background: book.accent,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "5rem 4rem",
                position: "relative",
              }}
            >
              {/* Book number watermark */}
              <div
                style={{
                  position: "absolute",
                  top: "3rem",
                  right: "3rem",
                  fontFamily: "'Cormorant', serif",
                  fontSize: "7rem",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.06)",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                0{i + 1}
              </div>

              <span
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase" as const,
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "1rem",
                }}
              >
                Библиография · {book.year}
              </span>

              <h2
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: "#ffffff",
                  marginBottom: "1.5rem",
                }}
              >
                {book.title}
              </h2>

              <div
                style={{
                  width: "48px",
                  height: "1px",
                  background: "var(--burgundy)",
                  marginBottom: "1.75rem",
                  opacity: 0.8,
                }}
              />

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: "420px",
                  marginBottom: "2.5rem",
                }}
              >
                {book.desc}
              </p>

              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <a
                  href="javascript:void(0)"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(255,255,255,0.1)",
                    color: "#ffffff",
                    fontFamily: "'Golos Text', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    padding: "0.875rem 1.75rem",
                    border: "1px solid rgba(255,255,255,0.2)",
                    textDecoration: "none",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.18)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  }}
                >
                  Подробнее
                </a>
                <a
                  href="javascript:void(0)"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                    paddingBottom: "2px",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  }}
                >
                  Купить
                  <Icon name="ExternalLink" size={11} />
                </a>
              </div>

              {/* Scroll indicator (not last) */}
              {i < books.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "2.5rem",
                    left: "4rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "rgba(255,255,255,0.25)",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  <Icon name="ArrowDown" size={12} />
                  следующая
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <hr className="section-divider" />

      {/* ── REVIEWS ── */}
      <section id="reviews" style={{ padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <span className="section-label">Читатели о книгах</span>
          <h2
            className="section-title"
            style={{ marginTop: "0.75rem", marginBottom: "3rem" }}
          >
            Отзывы
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="reviews-grid"
          >
            {reviews.map((review) => (
              <div key={review.author} className="review-card">
                <p
                  style={{
                    lineHeight: 1.75,
                    color: "var(--text-mid)",
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                    fontFamily: "'Cormorant', serif",
                    fontSize: "1.125rem",
                  }}
                >
                  {review.text}
                </p>
                <div
                  style={{
                    borderTop: "1px solid var(--divider)",
                    paddingTop: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.15rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--text-dark)",
                    }}
                  >
                    {review.author}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>
                    {review.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "3rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: "1.25rem",
                fontWeight: 500,
                color: "rgba(247, 244, 239, 0.9)",
                marginBottom: "0.5rem",
              }}
            >
              Lana Brightwood
            </div>
            <div style={{ fontSize: "0.8125rem", color: "rgba(247,244,239,0.45)" }}>
              © 2026 Лана Брайтвуд
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "1rem",
            }}
          >
            <a
              href="mailto:lana@brightwood.com"
              style={{
                fontSize: "0.875rem",
                color: "rgba(247,244,239,0.55)",
                textDecoration: "none",
                letterSpacing: "0.03em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(247,244,239,0.9)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(247,244,239,0.55)")
              }
            >
              lana@brightwood.com
            </a>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <FooterSocialLink href="#" title="Telegram">
                <TelegramIcon />
              </FooterSocialLink>
              <FooterSocialLink href="#" title="ВКонтакте">
                <VkIcon />
              </FooterSocialLink>
              <FooterSocialLink href="#" title="Макс" isMax>
                М
              </FooterSocialLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}