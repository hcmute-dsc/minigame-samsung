import React from "react";
import Header from "@/components/Header";
import GameCard from "@/components/GameCard";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const gameData = [
  {
    id: 1,
    title: "Cuộc Chiến Pixel",
    description:
      "Một game hành động retro siêu cuốn hút. Bạn sẽ điều khiển anh hùng pixel để vượt qua hàng loạt thử thách hấp dẫn.",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "/game/pixel-battle",
    color: "#8B5CF6",
  },
  {
    id: 2,
    title: "Ghép Hình Kỳ Ảo",
    description:
      "Thử tài suy luận với những mảnh ghép huyền bí. Mỗi màn chơi là một thế giới.",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "/game/puzzle-quest",
    color: "#10B981",
  },
  {
    id: 3,
    title: "Cuộc Đua Không Tên",
    description:
      "Chạy không ngừng, né chướng ngại vật, vượt qua chính mình và bạn bè.",
    imageUrl:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "/game/endless-runner",
    color: "#F97316",
  },
  {
    id: 4,
    title: "Phù Thủy Học Viện",
    description:
      "Hóa thân thành học viên phép thuật, học chiêu thức, chiến đấu với sinh vật kỳ lạ.",
    imageUrl:
      "https://images.unsplash.com/photo-1614729375296-a4f8d64e60df?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "/game/wizard-academy",
    color: "#0EA5E9",
  },
  {
    id: 5,
    title: "Nông Trại Mộng Mơ",
    description: "Xây dựng nông trại mơ ước, nuôi thú, trồng cây và làm giàu.",
    imageUrl:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "/game/dream-farm",
    color: "#D946EF",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Games Section */}
        <section
          id="games"
          className="section-padding relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 bg-clip-text text-transparent bg-gradient-to-r from-game-purple to-game-blue">
                Khám Phá Các Game Hot
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Trải nghiệm những trò chơi hấp dẫn, từ hành động gay cấn đến thư
                giãn nhẹ nhàng.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gameData.map((game, index) => (
                <GameCard key={game.id} {...game} delay={index * 150} />
              ))}
            </div>
          </div>
        </section>

        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
