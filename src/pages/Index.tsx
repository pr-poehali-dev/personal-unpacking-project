import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Юлия Белова</h1>
          <div className="hidden md:flex gap-6">
            <a href="#process" className="text-sm hover:text-primary transition-colors">Процесс</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">О специалисте</a>
            <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#articles" className="text-sm hover:text-primary transition-colors">Статьи</a>
            <a href="#booking" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button asChild>
            <a href="#booking">Записаться</a>
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-purple-100 text-primary rounded-full text-sm font-medium">
                Распаковка личности
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Увидеть всю картину, <span className="text-primary">а не латать дыры</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Глубокая распаковка личности и сфер жизни от Юлии Беловой — заочная расстановка на бумаге, которая покажет корень проблем и путь к их решению
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#booking">Забронировать сессию</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="#process">Узнать больше</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">страниц анализа</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">этапа работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">индивидуально</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in animate-delay-200">
              <img 
                src="https://cdn.poehali.dev/projects/f4e19b01-cfdd-4665-a004-488e8849c643/files/93ae65b5-5839-4a9b-b86c-0ac70b9296fe.jpg"
                alt="Распаковка личности"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Специальное предложение</h2>
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 rounded-3xl p-8 space-y-4">
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <div className="text-4xl font-bold text-muted-foreground line-through">35 000 ₽</div>
              <Icon name="ArrowRight" size={32} className="text-primary" />
              <div className="text-6xl font-bold text-primary">5 500 ₽</div>
            </div>
            <p className="text-xl">Полный пакет «Распаковка личности и сфер жизни»</p>
            <p className="text-muted-foreground">Предложение действительно до конца декабря</p>
            <Button size="lg" className="text-lg px-12 mt-4" asChild>
              <a href="#booking">Забронировать за 5 500 ₽</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Как проходит распаковка</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Три последовательных этапа, которые приведут вас к глубокому пониманию себя
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold">Диагностическая консультация</h3>
                <p className="text-muted-foreground">
                  30-40 минут онлайн-встречи, где мы уточняем ваш запрос и находим настоящий «узел». После встречи я оцифровываю сессию и фиксирую ключевые моменты.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Clock" size={20} />
                  <span className="font-medium">30-40 минут</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold">Индивидуальные вопросы</h3>
                <p className="text-muted-foreground">
                  Я подбираю глубокие вопросы именно под вашу ситуацию. Ваша задача — честно и ёмко ответить на них письменно. Это домашнее задание — основа для распаковки.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="FileText" size={20} />
                  <span className="font-medium">Домашнее задание</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold">Распаковка на 5+ листов</h3>
                <p className="text-muted-foreground">
                  Заочная расстановка на бумаге с описанием вашей ситуации, корней проблем, точек силы и уязвимости, и конкретных векторов решения — инструкция к действию.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="BookOpen" size={20} />
                  <span className="font-medium">5+ страниц анализа</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Что вы получите</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl border-2">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Search" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Описание вашей системы</h3>
                  <p className="text-muted-foreground">Как врачебный анамнез, только про жизнь — полная картина вашей ситуации</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Корни проблем</h3>
                  <p className="text-muted-foreground">Откуда берутся повторяющиеся сценарии и почему вы живёте так, как сейчас</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Точки силы и уязвимости</h3>
                  <p className="text-muted-foreground">Ключевые ресурсы, на которые можно опираться, и слабые места системы</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Конкретные векторы решения</h3>
                  <p className="text-muted-foreground">Куда смотреть, что менять, с чего начать — понятная инструкция к действию</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">О специалисте</h2>
              <h3 className="text-2xl font-semibold text-primary">Юлия Белова</h3>
              <p className="text-lg font-medium text-foreground leading-relaxed">
                Психолог, коуч, расстановщик.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Автор книг и расстановочных иммерсивных шоу «Ключи к жизни».
                Основатель Международного университета психологии и бизнеса.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Специализируюсь на расстановках и глубинной психологии.
                Помогаю увидеть полную картину жизни, найти корни проблем и получить конкретные инструменты для изменений.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Моя методика — это заочная расстановка на бумаге, где каждый важный элемент вашей жизни разбирается глубоко и структурно.
                Не просто разговор, а понятная инструкция к действию.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0" />
                  <span className="text-lg">Системный подход к анализу жизненных ситуаций</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0" />
                  <span className="text-lg">Индивидуальная работа с каждым запросом</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0" />
                  <span className="text-lg">Конкретные решения, а не абстрактные советы</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://cdn.poehali.dev/files/31abcac9-2c85-43ec-acbf-c0c0a12afc42.jpg"
                alt="Юлия Белова"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят те, кто прошёл распаковку</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Юлия помогла мне увидеть корень проблем в отношениях. Впервые за долгое время я поняла, что делать дальше. Распаковка — это не просто консультация, это настоящая инструкция к жизни."
                </p>
                <div className="pt-4">
                  <p className="font-semibold">Анна, 34 года</p>
                  <p className="text-sm text-muted-foreground">Запрос: отношения</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Невероятно глубокая работа. Я получил 7 страниц анализа, который объяснил все мои повторяющиеся паттерны в карьере. Теперь понимаю, куда двигаться. Очень рекомендую!"
                </p>
                <div className="pt-4">
                  <p className="font-semibold">Дмитрий, 41 год</p>
                  <p className="text-sm text-muted-foreground">Запрос: карьера</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Это не похоже ни на что, что я пробовала раньше. Юлия нашла точные слова и показала мне мою систему так ясно, что я просто не могла не измениться. Спасибо за такой формат!"
                </p>
                <div className="pt-4">
                  <p className="font-semibold">Елена, 29 лет</p>
                  <p className="text-sm text-muted-foreground">Запрос: самореализация</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Статьи и материалы</h2>
            <p className="text-lg text-muted-foreground">Полезные материалы по психологии и саморазвитию</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl border-2 hover:shadow-xl transition-all overflow-hidden group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/f4e19b01-cfdd-4665-a004-488e8849c643/files/55b9d838-fefa-4e0e-af7e-491f5fc735eb.jpg"
                  alt="Статья"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  Почему повторяются одни и те же сценарии в жизни?
                </h3>
                <p className="text-muted-foreground">
                  Разбираем системные причины повторяющихся паттернов и как их изменить.
                </p>
                <div className="flex items-center gap-2 text-primary pt-2">
                  <span className="font-medium">Читать далее</span>
                  <Icon name="ArrowRight" size={20} />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 hover:shadow-xl transition-all overflow-hidden group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/f4e19b01-cfdd-4665-a004-488e8849c643/files/93ae65b5-5839-4a9b-b86c-0ac70b9296fe.jpg"
                  alt="Статья"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  Как найти корень проблемы, а не латать симптомы
                </h3>
                <p className="text-muted-foreground">
                  Системный подход к решению жизненных задач: от анализа к действию.
                </p>
                <div className="flex items-center gap-2 text-primary pt-2">
                  <span className="font-medium">Читать далее</span>
                  <Icon name="ArrowRight" size={20} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-purple-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Готовы к изменениям?</h2>
            <p className="text-lg text-muted-foreground">Забронируйте распаковку прямо сейчас по специальной цене</p>
          </div>



          <div className="mt-12 text-center">
            <p className="text-lg mb-4">Напишите мне в Telegram:</p>
            <Button size="lg" variant="outline" className="rounded-xl" asChild>
              <a href="https://t.me/ubelovacoach" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-white border-t border-purple-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Юлия Белова</h3>
              <p className="text-muted-foreground">Распаковка личности и сфер жизни</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Навигация</h4>
              <div className="flex flex-col gap-2">
                <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">Процесс</a>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О специалисте</a>
                <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
                <a href="#articles" className="text-muted-foreground hover:text-primary transition-colors">Статьи</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Контакты</h4>
              <div className="flex flex-col gap-2">
                <a href="https://t.me/ubelovacoach" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Icon name="MessageCircle" size={18} />
                  Telegram
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-purple-100 text-center text-muted-foreground">
            <p>© 2025 Юлия Белова. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;