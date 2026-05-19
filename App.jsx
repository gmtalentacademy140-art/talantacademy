export default function TalentAcademyWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-green-50 to-yellow-50 text-slate-800">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <img
          src="/logo.png"
          alt="Talent Academy"
          className="w-32"
        />

        <nav className="hidden md:flex gap-6 font-bold">
          <a href="#home">الرئيسية</a>
          <a href="#about">من نحن</a>
          <a href="#programs">البرامج</a>
          <a href="#gallery">الصور</a>
          <a href="#contact">تواصل</a>
        </nav>

        <a
          href="https://wa.me/201000000000"
          className="bg-green-500 text-white px-5 py-3 rounded-full"
        >
          WhatsApp
        </a>
      </header>

      <section className="py-24 text-center px-6">
        <h1 className="text-6xl font-black mb-6">
          Welcome to <span className="text-orange-500">Talent</span>{" "}
          <span className="text-blue-700">Academy</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-9">
          مكان آمن وممتع لتعليم الأطفال وتنمية مهاراتهم بالإبداع واللعب.
        </p>

        <button className="mt-10 bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl">
          سجل الآن
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-10 pb-24">
        <div className="bg-purple-600 text-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-black mb-4">تعلم ممتع</h2>
          <p>أنشطة تعليمية تفاعلية ممتعة للأطفال.</p>
        </div>

        <div className="bg-orange-400 text-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-black mb-4">أنشطة إبداعية</h2>
          <p>رسم وموسيقى وألعاب تنمية المهارات.</p>
        </div>

        <div className="bg-green-500 text-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-black mb-4">تنمية مبكرة</h2>
          <p>بناء الثقة والتواصل والمهارات الاجتماعية.</p>
        </div>
      </section>

      <footer className="bg-slate-900 text-white text-center py-6">
        © 2026 Talent Academy
      </footer>
    </div>
  );
}
