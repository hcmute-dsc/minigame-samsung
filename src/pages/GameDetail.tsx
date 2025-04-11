import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Trophy,
  Gamepad2,
  Sparkles,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const gameData = {
  "pixel-battle": {
    id: 1,
    title: " Black Hole",
    description:
      "Một game luyện phản xạ và tốc độ để điều khiển 🚀 giữa dải ngân hà đầy hiểm nguy! ",
    longDescription: `

 🚀 Phi Thuyền Né Đá 🌌
 Bạn đang điều khiển một phi thuyền giữa dải ngân hà đầy hiểm nguy!
 🌠 Các thiên thạch không ngừng lao tới, nhiệm vụ của bạn là né tránh tất cả để sống sót và ghi điểm.
 🎯 Mỗi lần né thành công, bạn nhận được điểm. Nếu đạt đủ 200 điểm, bạn sẽ chiến thắng và trở thành huyền thoại giữa các vì sao!
`,
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    screenshots: [
      "https://i.imgur.com/zxSWyX9.png",
      "https://i.imgur.com/5UBqkVI.png",
      ,
    ],
    features: [
      "Điều khiển 🚀 đơn giản bằng cách duy chuyển chuột",
      "Sau khi vượt 100 điểm bạn vẫn có thể chơi tiếp với độ khó tăng dần",
    ],
    link: "https://remarkable-frangollo-5313bf.netlify.app/",
    color: "#8B5CF6",
    rating: 4.8,
    reviews: 1240,
    headerColor: "from-purple-600 to-blue-600",
    gradientColor: "from-purple-900 via-indigo-900 to-blue-900",
    accentColor: "purple",
  },
  "puzzle-quest": {
    id: 2,
    title: "Capture The Glitch",
    description:
      "Sử dụng lưới quét lỗi để bắt và xử lý các gói dữ liệu hỏng trước khi hệ thống rơi vào trạng thái quá tải.",
    longDescription: `🧠 Hệ Thống Đang Gặp Sự Cố! ⚠️
Chúng ta đang đối mặt với một cuộc tấn công dữ liệu nghiêm trọng – hàng loạt gói dữ liệu lỗi và lỗi hệ thống đang tràn ngập máy chủ.

🕹️ Nhiệm vụ của bạn:
Sử dụng lưới quét lỗi để bắt và xử lý các gói dữ liệu hỏng trước khi hệ thống rơi vào trạng thái quá tải.

⏱️ Hãy cẩn thận: mỗi lỗi bỏ sót sẽ khiến độ ổn định hệ thống giảm. Nếu bạn kịp bắt đủ 100 lỗi trước khi hệ thống sập, bạn sẽ khôi phục thành công máy chủ và trở thành anh hùng DevOps!

💻 Hãy vào vai kỹ sư hệ thống và thể hiện phản xạ thần tốc của bạn – thời gian không còn nhiều…`,
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    screenshots: [
      "https://i.imgur.com/EHK0jNz.png",
      "https://i.imgur.com/tmCAgRS.png",
    ],
    features: [" Độ khó tăng dần", "Hiệu ứng mượt mà"],
    link: "https://glistening-toffee-3be03d.netlify.app/",
    color: "#10B981",
    rating: 4.7,
    reviews: 850,
    headerColor: "from-emerald-600 to-teal-600",
    gradientColor: "from-emerald-900 via-teal-900 to-cyan-900",
    accentColor: "emerald",
  },
  "endless-runner": {
    id: 3,
    title: "Cuộc Đua Không Tên",
    description:
      "Chạy không ngừng, né chướng ngại vật, vượt qua chính mình và bạn bè.",
    longDescription:
      "Cuộc Đua Không Tên là game chạy vô tận (endless runner) với nhịp độ nhanh và kịch tính. Bạn sẽ điều khiển nhân vật chạy qua các môi trường đa dạng từ thành phố nhộn nhịp đến rừng rậm bí ẩn. Mỗi lần chơi là một hành trình mới với các chướng ngại vật được sắp xếp ngẫu nhiên. Thu thập tiền xu, nâng cấp nhân vật và đạt được khoảng cách xa nhất để lên đầu bảng xếp hạng.",
    imageUrl:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
    screenshots: [
      "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1574266965598-15e8bf8864ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1628172730897-e41fcd594e57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    features: [
      "Điều khiển đơn giản bằng vuốt và chạm",
      "Môi trường đa dạng với thử thách độc đáo",
      "Hệ thống nâng cấp nhân vật với nhiều skin",
      "Các sự kiện đặc biệt hàng tuần",
      "Chế độ thách đấu với bạn bè",
    ],
    link: "https://example.com/game3",
    color: "#F97316",
    rating: 4.5,
    reviews: 2100,
    headerColor: "from-orange-600 to-amber-600",
    gradientColor: "from-orange-900 via-amber-900 to-red-900",
    accentColor: "orange",
  },
  "wizard-academy": {
    id: 4,
    title: "Phù Thủy Học Viện",
    description:
      "Hóa thân thành học viên phép thuật, học chiêu thức, chiến đấu với sinh vật kỳ lạ.",
    longDescription:
      "Phù Thủy Học Viện là game nhập vai (RPG) đưa bạn vào thế giới phép thuật đầy huyền bí. Bạn sẽ trở thành một học viên tại học viện phép thuật danh tiếng, nơi bạn sẽ học các bùa chú, pha chế độc dược và khám phá những bí mật cổ xưa. Với hệ thống chiến đấu kết hợp thời gian thực và turn-based, bạn sẽ đối đầu với các sinh vật huyền bí và thậm chí là những phù thủy hắc ám.",
    imageUrl:
      "https://images.unsplash.com/photo-1614729375296-a4f8d64e60df?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
    screenshots: [
      "https://images.unsplash.com/photo-1614729375296-a4f8d64e60df?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    features: [
      "Cốt truyện sâu sắc với nhiều nhánh lựa chọn",
      "Hơn 100 bùa chú và độc dược để học và pha chế",
      "Hệ thống phát triển nhân vật với nhiều con đường",
      "Thế giới mở rộng lớn với nhiều khu vực để khám phá",
      "Nhiệm vụ phụ đa dạng và mini-game",
    ],
    link: "https://example.com/game4",
    color: "#0EA5E9",
    rating: 4.9,
    reviews: 1820,
    headerColor: "from-blue-600 to-cyan-600",
    gradientColor: "from-blue-900 via-cyan-900 to-indigo-900",
    accentColor: "blue",
  },
};

const GameDetail = () => {
  const { gameId } = useParams();
  const [animateIn, setAnimateIn] = useState(false);
  const navigate = useNavigate();
  const game = gameData[gameId as keyof typeof gameData];

  useEffect(() => {
    window.scrollTo(0, 0);
    setAnimateIn(false);

    // Thêm hiệu ứng khi chuyển trang
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [gameId]);

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Game không tồn tại</h1>
          <Button
            onClick={() => navigate("/game/pixel-battle")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Quay lại
          </Button>
        </div>
      </div>
    );
  }

  const getAccentColorClass = (color: string, opacity: number = 500) => {
    return `${color}-${opacity}`;
  };

  return (
    <div
      className={`min-h-screen bg-black text-white overflow-x-hidden`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${game.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main
        className={`pt-24 transition-opacity duration-700 ${
          animateIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* 3D Hero section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b bg-black/30"></div>

          {/* Particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white opacity-70 animate-pulse"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                }}
              ></div>
            ))}
          </div>

          <div className="container mx-auto px-4 z-10 relative">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 space-y-6">
                <div className="space-y-2 text-center lg:text-left">
                  <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 leading-tight relative inline-block">
                    {game.title}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl rounded-full -z-10"></div>
                  </h1>

                  <p className="text-xl text-gray-300 max-w-2xl">
                    {game.description}
                  </p>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(game.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="ml-2 font-medium">{game.rating}</span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <div className="text-gray-300">{game.reviews} đánh giá</div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 rounded-full font-medium text-white shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 bg-gradient-to-r ${game.headerColor} relative overflow-hidden group`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Chơi ngay
                      <Gamepad2 className="w-5 h-5" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 perspective-1000">
                <div className="relative w-full max-w-lg mx-auto transform transition-all duration-700 rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-[0deg] hover:rotate-x-[0deg]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl opacity-75 blur-xl animate-pulse"></div>
                  <img
                    src={game.screenshots[0]}
                    alt={game.title}
                    className="w-full h-auto object-cover rounded-xl relative z-10 shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                  />

                  {/* 3D effect elements */}
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-xl"></div>
                  <div className="absolute -left-6 -top-6 w-32 h-32 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-12">
                {/* Game description */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold inline-flex items-center gap-2 relative">
                    <span className="relative">
                      Giới thiệu
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></span>
                    </span>
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </h2>

                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-8 rounded-xl border border-purple-900/30 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-600/10 blur-3xl rounded-full"></div>
                    <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                      {game.longDescription}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold inline-flex items-center gap-2 relative">
                    <span className="relative">
                      Tính năng nổi bật
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></span>
                    </span>
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {game.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30 flex items-start gap-4 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                      >
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-${getAccentColorClass(
                            game.accentColor
                          )}/80 to-${getAccentColorClass(
                            game.accentColor,
                            700
                          )}/50 flex items-center justify-center`}
                        >
                          <Trophy className="w-6 h-6 text-white" />
                        </div>

                        <div>
                          <p className="text-gray-200">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screenshots */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold inline-flex items-center gap-2 relative">
                    <span className="relative">
                      Hình ảnh trong game
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></span>
                    </span>
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </h2>

                  <Carousel className="w-full">
                    <CarouselContent>
                      {game.screenshots.map((screenshot, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <div className="overflow-hidden rounded-xl group relative">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <img
                                src={screenshot}
                                alt={`${game.title} screenshot ${index + 1}`}
                                className="w-full h-auto object-cover aspect-video transform transition-transform duration-700 group-hover:scale-110"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              </div>

              {/* Sidebar */}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900/30"></div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-purple-500 opacity-30 animate-float"
                style={{
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  filter: "blur(30px)",
                }}
              ></div>
            ))}
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                Sẵn sàng cho cuộc phiêu lưu?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Hàng ngàn người chơi đã tham gia {game.title}. Không chần chừ
                nữa, trải nghiệm ngay hôm nay!
              </p>

              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 rounded-full font-medium text-white shadow-lg transition-all duration-300 inline-flex items-center gap-3 bg-gradient-to-r ${game.headerColor} hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105`}
              >
                Chơi ngay miễn phí
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer tối giản */}
      <footer className="py-6 bg-black/60 backdrop-blur-sm border-t border-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 DSC - Mọi quyền được bảo lưu
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GameDetail;
