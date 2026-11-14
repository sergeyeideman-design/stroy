import { useState } from "react";
import { settings, services, portfolio, reviews, advantages } from "./data";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { label: "Главная", href: "#hero" },
    { label: "Услуги", href: "#services" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500 text-white">
              <i className="fas fa-hard-hat text-xl"></i>
            </span>
            <span className="text-xl font-extrabold text-slate-900">
              {settings.companyName}
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-amber-600 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${settings.phoneHref}`}
              className="flex flex-col items-end leading-tight"
            >
              <span className="text-xs text-slate-500">Звоните нам</span>
              <span className="font-bold text-slate-900">
                {settings.phone}
              </span>
            </a>
            <a
              href="#contacts"
              className="px-4 py-2 rounded-lg bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition"
            >
              Оставить заявку
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-slate-700"
            aria-label="Меню"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i
              className={`${
                mobileOpen ? "fas fa-times" : "fas fa-bars"
              } text-xl`}
            ></i>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-3">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-slate-700 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${settings.phoneHref}`}
                className="block py-2 font-bold text-slate-900"
              >
                <i className="fas fa-phone mr-2 text-amber-500"></i>
                {settings.phone}
              </a>
              <a
                href="#contacts"
                className="block text-center px-4 py-2 rounded-lg bg-amber-500 text-white font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Оставить заявку
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative">
      <div className="absolute inset-0">
        <img
          src={settings.heroImage}
          className="w-full h-full object-cover"
          alt="Строительство"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-5">
            Строительная компания в вашем регионе
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            {settings.heroTitle}
          </h1>
          <p className="text-lg text-slate-200 mb-8">{settings.heroSubtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="px-7 py-3.5 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
            >
              Оставить заявку
            </a>
            <a
              href="#services"
              className="px-7 py-3.5 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition"
            >
              Наши услуги
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={settings.aboutImage}
              alt={settings.aboutTitle}
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {settings.aboutTitle}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 whitespace-pre-line">
              {settings.aboutText}
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-amber-500">10+</div>
                <div className="text-sm text-slate-500">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-amber-500">100+</div>
                <div className="text-sm text-slate-500">построенных объектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-amber-500">100%</div>
                <div className="text-sm text-slate-500">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Наши услуги
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Строим дома, бани, гаражи и другие объекты под ключ. Выберите
            направление, чтобы узнать подробнее.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 flex-1 line-clamp-3">
                  {s.shortDescription}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="block text-xs text-slate-400">
                      Цена от
                    </span>
                    <span className="font-bold text-amber-600">
                      {s.priceFormatted}
                    </span>
                    {s.priceUnit && (
                      <span className="text-xs text-slate-400">
                        {" "}
                        {s.priceUnit}
                      </span>
                    )}
                  </div>
                  <span className="text-amber-500 group-hover:translate-x-1 transition">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Почему выбирают нас
          </h2>
          <p className="text-slate-500">
            Работаем честно и прозрачно, поэтому к нам возвращаются и рекомендуют
            знакомым.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <i className={`fas ${a.icon} text-xl`}></i>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{a.title}</h3>
              <p className="text-sm text-slate-500">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Наши работы
            </h2>
            <p className="text-slate-500">Фотографии выполненных объектов</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                {p.category && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-semibold">
                    {p.category}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  {p.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  {p.area && (
                    <span className="flex items-center gap-1">
                      <i className="fas fa-ruler-combined text-amber-500"></i>
                      {p.area} м²
                    </span>
                  )}
                  {p.location && (
                    <span className="flex items-center gap-1">
                      <i className="fas fa-map-marker-alt text-amber-500"></i>
                      {p.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  function stars(n: number) {
    const count = Math.max(1, Math.min(5, Math.round(n || 5)));
    return Array.from({ length: 5 }, (_, i) => i < count);
  }

  return (
    <section id="reviews" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Отзывы клиентов
            </h2>
            <p className="text-slate-500">
              Что говорят о нас те, кто уже построил дом
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {stars(r.rating).map((on, i) => (
                  <i
                    key={i}
                    className={on ? "fas fa-star" : "far fa-star"}
                  ></i>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
                «{r.text}»
              </p>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  {(r.name || "?").charAt(0).toUpperCase()}
                </span>
                <div>
                  <span className="font-semibold text-slate-900 block">
                    {r.name}
                  </span>
                  <span className="text-xs text-slate-400">
                    Клиент компании
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setError("Пожалуйста, укажите имя и телефон");
      return;
    }
    setError("");
    setDone(true);
  }

  return (
    <section id="contacts" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Рассчитаем стоимость вашего проекта
            </h2>
            <p className="text-slate-300 mb-6">
              Оставьте заявку — мы перезвоним, ответим на вопросы и бесплатно
              посчитаем смету. Или позвоните нам напрямую.
            </p>
            <div className="space-y-3 text-slate-200">
              <a
                href={`tel:${settings.phoneHref}`}
                className="flex items-center gap-3"
              >
                <i className="fas fa-phone text-amber-500"></i>
                {settings.phone}
              </a>
              <div className="flex items-center gap-3">
                <i className="fas fa-clock text-amber-500"></i>
                {settings.workHours}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Оставьте заявку
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Мы перезвоним вам в ближайшее время и ответим на все вопросы.
            </p>

            {!done ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    placeholder="Иван"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Услуга
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">— Выберите услугу —</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Расскажите о вашем проекте"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
                >
                  Отправить заявку
                </button>
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <i className="fas fa-check text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Заявка отправлена!
                </h4>
                <p className="text-slate-500 text-sm">
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const nav = [
    { label: "Главная", href: "#hero" },
    { label: "Услуги", href: "#services" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-0 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500 text-white">
                <i className="fas fa-hard-hat"></i>
              </span>
              <span className="text-lg font-extrabold text-white">
                {settings.companyName}
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Строительство домов, бань, гаражей и других объектов под ключ.
              Работаем в своём регионе, дорожим репутацией и сроками.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-amber-400 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${settings.phoneHref}`}
                  className="flex items-center gap-2 hover:text-amber-400"
                >
                  <i className="fas fa-phone text-amber-500"></i>
                  {settings.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-2 hover:text-amber-400"
                >
                  <i className="fas fa-envelope text-amber-500"></i>
                  {settings.email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-amber-500"></i>
                  {settings.address}
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <i className="fas fa-clock text-amber-500"></i>
                  {settings.workHours}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Остались вопросы?
            </h4>
            <p className="text-sm mb-4">
              Позвоните нам или оставьте заявку — мы свяжемся с вами и всё
              расскажем.
            </p>
            <a
              href="#contacts"
              className="inline-block px-5 py-2.5 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
            >
              Связаться с нами
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} {settings.companyName}. Все права
            защищены.
          </span>
          <span>Строительство под ключ в вашем регионе</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <PortfolioSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
