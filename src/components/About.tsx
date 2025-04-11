
import React from 'react';
import { Gamepad, Zap, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-game-purple/10 to-game-blue/10 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-game-green/10 to-game-blue/10 blur-3xl rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl mb-4">
            <Gamepad className="h-8 w-8 text-game-purple" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 bg-clip-text text-transparent bg-gradient-to-r from-game-purple to-game-blue">Về Chúng Tôi</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            GameZone là nơi quy tụ những trò chơi phổ biến và hấp dẫn nhất dành cho người chơi mọi lứa tuổi. 
            Chúng tôi tin rằng mỗi người đều xứng đáng được trải nghiệm những cuộc phiêu lưu tuyệt vời 
            thông qua các trò chơi chất lượng cao và dễ tiếp cận.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-game-purple to-game-blue rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Trải Nghiệm Tuyệt Vời</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Mỗi trò chơi trong bộ sưu tập của chúng tôi đều được chọn lọc kỹ lưỡng để đảm bảo trải nghiệm người dùng tốt nhất, từ giao diện đến lối chơi.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-game-green to-game-blue rounded-lg flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Chất Lượng Cao</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Đội ngũ của chúng tôi luôn nỗ lực không ngừng để tìm kiếm và giới thiệu những tựa game hay nhất, từ các game casual nhẹ nhàng đến những trò chơi chiến thuật sâu sắc.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-game-orange to-game-pink rounded-lg flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Cộng Đồng Thân Thiện</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Chúng tôi tự hào xây dựng một cộng đồng game thủ đoàn kết, nơi người chơi có thể chia sẻ kinh nghiệm, kết bạn và cùng nhau tận hưởng niềm vui chơi game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
