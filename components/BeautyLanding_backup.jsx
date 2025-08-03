import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Phone, Mail, MapPin, Clock, Award, Users } from 'lucide-react';

const BeautyLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [];

  const eyeServices = [
    {
      title: "Göz Çevresi Canlandırma",
      icon: "👁",
      description: "Göz altı morlukları ve çöküklükleri özel dolgularla giderin.",
      features: ["Göz altı morlukları", "Çöküklük giderme", "Canlı bakış", "Gençlik efekti"]
    }
  ];

  const skinServices = [
    {
      title: "Cilt Gençleştirme",
      icon: "🌟",
      description: "PRP, Mezoterapi, Somon DNA ve Dermapen ile cilt yenileme.",
      features: ["PRP tedavisi", "Vitamin mezoterapisi", "Somon DNA", "Dermapen"]
    }
  ];

  const fillerServices = [
    {
      title: "Dolgu Uygulamaları",
      icon: "💉",
      description: "Yüz hacmini yeniden kazandırın, dudaklarınıza dolgunluk verin.",
      features: ["Elmacık kemikleri", "Dudak dolgusu", "Yüz hacmi", "Doğal görünüm"]
    }
  ];

  const wrinkleServices = [
    {
      title: "Kırışıklık Giderici Uygulamalar",
      icon: "✨",
      description: "Yüz kaslarının tekrarlayan hareketlerinden kaynaklanan mimik çizgileri; alın, kaş arası ve göz çevresinde belirgin hale gelir. Medikal estetik yöntemler sayesinde cildiniz eski elastikiyetine kavuşur.",
      features: []
    }
  ];

  const mimikServices = [
    {
      title: "Mimik Kaslarını Rahatlatan Uygulamalar",
      icon: "😊",
      description: "Kırışıklıkların görünümünü azaltmaya yönelik enjeksiyon uygulaması ile cilt yüzeyi daha pürüzsüz ve dinlenmiş görünür. Tekrarlanabilir uygulama ile belirli aralıklarla yenilenebilir.",
      features: ["Mimik çizgileri", "Dinlenmiş görünüm", "Pürüzsüz cilt", "Tekrarlanabilir uygulama"]
    }
  ];

  const benefits = [
    "Uzman doktorlar eşliğinde kişiye özel planlama",
    "Doğal görünümlü ve dengeli sonuçlar", 
    "Steril klinik ortam ve FDA onaylı ürünler",
    "Acısız ve kısa sürede tamamlanan işlemler"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-orange-500/10"></div>
        <div className={`container mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-6 leading-tight">
                Doğal-Hızlı ve Etkili Çözümlerle
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
                Gençliğinizi Geri Kazanın
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Zamanlа yüzümüzde beliren ince çizgiler ve hacim kayıpları sizi rahatsız mı ediyor? 
                Kişiye göre belirlenen estetik uygulamalarla daha genç, canlı ve dinlenmiş bir görünüme kavuşmanız artık çok kolay!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => document.getElementById('consultation')?.scrollIntoView({behavior: 'smooth'})}
                  className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  🖱️ Ücretsiz Danışmanlık Al
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
                  className="px-8 py-4 border-2 border-orange-500 text-orange-600 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Hizmetlerimizi İncele
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-3xl p-4 md:p-8 shadow-2xl">
                <img 
                  src="/images/basik.webp"
                  alt="Estetik Klinik - Modern Tedavi Ortamı"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-center rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-100 via-slate-100 to-blue-50 rounded-2xl shadow-lg items-center justify-center hidden">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🏥</div>
                    <div className="text-lg sm:text-xl font-bold text-slate-700">Modern Klinik</div>
                    <div className="text-sm text-slate-600">Estetik Tedavi Merkezi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

               {/* Hizmetlerimiz Başlığı */}
        <div className="py-8 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-6">
                Hizmetlerimiz
              </h2>
          </div>
        </div>
      </div>

                 {/* Kırışıklık Giderici Uygulamalar Section */}
        <div className="py-12 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
           
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {wrinkleServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-blue-100/50"
              >
                                 <div className="text-center">
                   <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                  {service.title}
                </h3>
                                       <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                      Yüz kaslarının tekrarlayan hareketlerinden kaynaklanan mimik çizgileri; alın, kaş arası ve göz çevresinde belirgin hale gelir. 
                </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
              </div>
            ))}
          </div>
        </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Mimik Kaslarını Rahatlatan Uygulamalar Section */}
        <div className="py-12 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="container mx-auto px-4">
            
           <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
             {mimikServices.map((service, index) => (
               <div 
                 key={index}
                 className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-blue-100/50"
               >
                 <div className="text-center">
                   <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                     {service.title}
                   </h3>
                   <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                     {service.description}
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {service.features.map((feature, i) => (
                       <div key={i} className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                         <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                         {feature}
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
                     {/* Mimik Kasları Tedavisi Görselleri */}
           <div className="mt-12">
       <div className="container mx-auto px-4">
        
        <div className="flex justify-center">
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6 min-w-max">
            
            {/* Görsel 1 */}
            <div className="flex-shrink-0 w-80">
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <img 
                  src="/images/before-after-forehead-1.jpg"
                  alt="Mimik kasları tedavisi - Öncesi Sonrası"
                  className="w-full h-auto object-contain rounded-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-80 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl items-center justify-center hidden">
                  <div className="text-center">
                    <div className="text-4xl mb-2">😟 ➜ 😊</div>
                    <p className="text-sm text-slate-600">Mimik Kasları</p>
                    <p className="text-xs text-slate-500">Öncesi - Sonrası</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-slate-700">Mimik Kasları</p>
                  <p className="text-xs text-slate-500">Doğal Görünüm</p>
                </div>
              </div>
            </div>

            {/* Görsel 2 */}
            <div className="flex-shrink-0 w-80">
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <img 
                  src="/images/before-after-forehead-2.jpg"
                  alt="Mimik kasları tedavisi 2"
                  className="w-full h-auto object-contain rounded-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-80 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl items-center justify-center hidden">
                  <div className="text-center">
                    <div className="text-4xl mb-2">😔 ➜ 😌</div>
                    <p className="text-sm text-slate-600">Mimik Kasları</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-slate-700">Mimik Çizgileri</p>
                  <p className="text-xs text-slate-500">Doğal Görünüm</p>
                </div>
              </div>
            </div>



          </div>
        </div>
       </div>
     </div>
  </div>
      </div>

        {/* Dolgu Uygulamaları Section */}
        <div className="py-12 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            
           <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
             {fillerServices.map((service, index) => (
               <div 
                 key={index}
                 className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-blue-100/50"
               >
                 <div className="text-center">
                   <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                     {service.title}
              </h3>
                   <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                     {service.description}
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {service.features.map((feature, i) => (
                       <div key={i} className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                         <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                         {feature}
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
                       {/* Dudak Dolgusu Görselleri */}
            <div className="mt-12">
        <div className="container mx-auto px-4">
         
         <div className="flex justify-center">
           <div className="overflow-x-auto pb-4">
             <div className="flex space-x-6 min-w-max">
             
             {/* Görsel 1 */}
             <div className="flex-shrink-0 w-80">
               <div className="bg-white rounded-2xl shadow-lg p-4">
                 <img 
                   src="/images/before-after-lips-1.jpg"
                   alt="Dudak dolgusu tedavisi 1"
                   className="w-full h-auto object-contain rounded-xl"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="w-full h-80 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl items-center justify-center hidden">
                   <div className="text-center">
                     <div className="text-4xl mb-2">👄 ➜ 💋</div>
                     <p className="text-sm text-slate-600">Dudak Dolgusu</p>
                     <p className="text-xs text-slate-500">Öncesi - Sonrası</p>
                   </div>
                 </div>
                 <div className="mt-3 text-center">
                   <p className="text-sm font-medium text-slate-700">Dudak Dolgusu</p>
                   <p className="text-xs text-slate-500">Doğal Görünüm</p>
                 </div>
               </div>
             </div>

             {/* Görsel 2 */}
             <div className="flex-shrink-0 w-80">
               <div className="bg-white rounded-2xl shadow-lg p-4">
                 <img 
                   src="/images/before-after-lips-2.jpg"
                   alt="Dudak dolgusu tedavisi 2"
                   className="w-full h-auto object-contain rounded-xl"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="w-full h-80 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl items-center justify-center hidden">
                   <div className="text-center">
                     <div className="text-4xl mb-2">😐 ➜ 😊</div>
                     <p className="text-sm text-slate-600">Dudak Dolgusu</p>
                     <p className="text-xs text-slate-500">Öncesi - Sonrası</p>
                   </div>
                 </div>
                 <div className="mt-3 text-center">
                   <p className="text-sm font-medium text-slate-700">Dudak Dolgusu</p>
                   <p className="text-xs text-slate-500">Doğal Görünüm</p>
                 </div>
               </div>
             </div>

             {/* Video 3 */}
             <div className="flex-shrink-0 w-80">
               <div className="bg-white rounded-2xl shadow-lg p-4">
                 <video 
                   src="/images/udak-dolgusu-video.mp4"
                   alt="Dudak dolgusu tedavisi video"
                   className="w-full h-80 object-cover rounded-xl"
                   controls
                   preload="metadata"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="w-full h-80 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl items-center justify-center hidden">
                   <div className="text-center">
                     <div className="text-4xl mb-2">🎥</div>
                     <p className="text-sm text-slate-600">Dudak Dolgusu Video</p>
                     <p className="text-xs text-slate-500">Tedavi Süreci</p>
                   </div>
                 </div>
                 <div className="mt-3 text-center">
                   <p className="text-sm font-medium text-slate-700">Dudak Dolgusu Video</p>
                   <p className="text-xs text-slate-500">Tedavi Süreci</p>
                 </div>
               </div>
             </div>



              </div>
            </div>
          </div>
        </div>

                     
        </div>
      </div>
       </div>
  </div>

        {/* Göz Çevresi Canlandırma Section */}
        <div className="py-12 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="container mx-auto px-4">
            
           <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
             {eyeServices.map((service, index) => (
               <div 
                 key={index}
                 className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-blue-100/50"
               >
                 <div className="text-center">
                   <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                     {service.title}
                   </h3>
                   <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                     {service.description}
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {service.features.map((feature, i) => (
                       <div key={i} className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                         <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                         {feature}
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
                       {/* Göz Çevresi Görselleri */}
            <div className="mt-12">
        <div className="container mx-auto px-4">
         
         <div className="md:flex md:justify-center">
           <div className="overflow-x-auto pb-4 md:overflow-visible">
             <div className="flex space-x-6 min-w-max md:grid md:grid-cols-2 md:gap-6 md:max-w-4xl md:min-w-0">
             
             {/* Görsel 1 */}
             <div className="w-full">
               <div className="bg-white rounded-2xl shadow-lg p-4">
                 <img 
                   src="/images/goz-cevresi-1.jpg"
                   alt="Göz çevresi tedavisi 1"
                   className="w-full h-80 object-cover rounded-xl"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="w-full h-80 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl items-center justify-center hidden">
                   <div className="text-center">
                     <div className="text-4xl mb-2">😴 ➜ 😊</div>
                     <p className="text-sm text-slate-600">Göz Çevresi</p>
                     <p className="text-xs text-slate-500">Öncesi - Sonrası</p>
                   </div>
                 </div>
                 <div className="mt-3 text-center">
                   <p className="text-sm font-medium text-slate-700">Göz Çevresi Canlandırma</p>
                   <p className="text-xs text-slate-500">Doğal Görünüm</p>
                 </div>
               </div>
             </div>

             {/* Görsel 2 */}
             <div className="w-full">
               <div className="bg-white rounded-2xl shadow-lg p-4">
                 <img 
                   src="/images/goz-cevresi-2.jpg"
                   alt="Göz çevresi tedavisi 2"
                   className="w-full h-80 object-cover rounded-xl"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="w-full h-80 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl items-center justify-center hidden">
                   <div className="text-center">
                     <div className="text-4xl mb-2">😔 ➜ 😌</div>
                     <p className="text-sm text-slate-600">Göz Çevresi</p>
                     <p className="text-xs text-slate-500">Öncesi - Sonrası</p>
                   </div>
                 </div>
                 <div className="mt-3 text-center">
                   <p className="text-sm font-medium text-slate-700">Göz Altı Morlukları</p>
                   <p className="text-xs text-slate-500">Doğal Görünüm</p>
                 </div>
               </div>
             </div>

             

             </div>
           </div>
         </div>

                     
        </div>
      </div>
   </div>
 </div>

        {/* Cilt Gençleştirme Section */}
        <div className="py-12 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            
           <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
             {skinServices.map((service, index) => (
               <div 
                 key={index}
                 className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-blue-100/50"
               >
                 <div className="text-center">
                   <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                     {service.title}
                   </h3>
                   <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                     {service.description}
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {service.features.map((feature, i) => (
                       <div key={i} className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                         <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                         {feature}
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
                       {/* Cilt Gençleştirme Görselleri */}
            <div className="mt-12">
        <div className="container mx-auto px-4">
         
         <div className="flex justify-center">
           <div className="overflow-x-auto pb-4">
             <div className="flex space-x-6 min-w-max">
             
             {/* Görsel 1 */}
             <div className="flex-shrink-0 w-80">
               <div className="bg-white rounded-2xl shadow-lg p-4">
                 <img 
                   src="/images/cilt-genclestir-1.jpg"
                   alt="Cilt gençleştirme tedavisi 1"
                   className="w-full h-auto object-contain rounded-xl"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="w-full h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl items-center justify-center hidden">
                   <div className="text-center">
                     <div className="text-4xl mb-2">😐 ➜ ✨</div>
                     <p className="text-sm text-slate-600">Cilt Gençleştirme</p>
                     <p className="text-xs text-slate-500">Öncesi - Sonrası</p>
                   </div>
                 </div>
                 <div className="mt-3 text-center">
                   <p className="text-sm font-medium text-slate-700">PRP Tedavisi</p>
                   <p className="text-xs text-slate-500">Doğal Görünüm</p>
                 </div>
               </div>
             </div>

             {/* Görsel 2 */}
             <div className="flex-shrink-0 w-80">
               <div className="bg-white rounded-2xl shadow-lg p-4">
                 <img 
                   src="/images/cilt-genclestir-2.jpg"
                   alt="Cilt gençleştirme tedavisi 2"
                   className="w-full h-auto object-contain rounded-xl"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="w-full h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl items-center justify-center hidden">
                   <div className="text-center">
                     <div className="text-4xl mb-2">😔 ➜ 🌟</div>
                     <p className="text-sm text-slate-600">Cilt Gençleştirme</p>
                     <p className="text-xs text-slate-500">Öncesi - Sonrası</p>
                   </div>
                 </div>
                 <div className="mt-3 text-center">
                   <p className="text-sm font-medium text-slate-700">Mezoterapi</p>
                   <p className="text-xs text-slate-500">Doğal Görünüm</p>
                 </div>
               </div>
             </div>

             

              </div>
            </div>
          </div>
        </div>

                     
        </div>
      </div>
   </div>
 </div>

                 



      {/* Why Choose Us Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              👩‍🔬 Neden Bizi Tercih Etmelisiniz?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-orange-300 mr-4 flex-shrink-0 mt-1" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

             {/* Before/After Gallery */}
       <div className="py-20 bg-white">
         <div className="container mx-auto px-4">
           
                      <div className="max-w-6xl mx-auto space-y-16">

            {/* Klinik Görüntüleri */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
                🏥 Modern Klinik Ortamımız
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                  <img 
                    src="/images/clinic-room.jpg"
                    alt="Modern klinik tedavi odası"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover object-center"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-blue-100 to-indigo-100 items-center justify-center hidden">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🏥</div>
                      <div className="text-base sm:text-lg font-medium text-gray-700">Modern Klinik</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                    <p className="text-white p-3 sm:p-4 font-medium text-sm sm:text-base">Steril ve Modern Tedavi Odası</p>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                  <img 
                    src="/images/treatment-team.jpg"
                    alt="Uzman doktor ve hemşire ekibi"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover object-center"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-green-100 to-emerald-100 items-center justify-center hidden">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl md:text-6xl mb-4">👨‍⚕️👩‍⚕️</div>
                      <div className="text-base sm:text-lg font-medium text-gray-700">Uzman Ekip</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                    <p className="text-white p-3 sm:p-4 font-medium text-sm sm:text-base">Uzman Ekip ile Güvenli Uygulama</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6 bg-white rounded-2xl p-4">
                <p className="text-slate-700 font-medium">Modern Teknoloji & Steril Ortam</p>
                <p className="text-sm text-slate-500">FDA onaylı ürünler ve son teknoloji ekipmanlarımızla güvenli tedavi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

             {/* Contact Section */}
       <div id="consultation" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                📆 Hemen Randevunuzu Alın
              </h2>
               <p className="text-xl text-slate-600">
                Siz de daha genç, sağlıklı ve dinamik bir görünüme kavuşmak için hemen formu doldurun. 
                Uzman ekibimiz sizinle iletişime geçerek en uygun çözümleri sunacaktır.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="text-center lg:text-left">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                   <div className="relative mb-8">
                     <img 
                       src="/images/doctor.jpg"
                       alt="Op. Dr. Barış Çin - Aesthetic Surgery Uzmanı"
                       className="w-full h-80 object-cover object-center rounded-2xl shadow-lg"
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                       }}
                     />
                     <div className="w-full h-80 bg-gradient-to-br from-blue-100 via-slate-100 to-blue-50 rounded-2xl shadow-lg items-center justify-center hidden">
                       <div className="text-center">
                         <div className="text-4xl sm:text-5xl md:text-6xl mb-4">👨‍⚕️</div>
                         <div className="text-lg sm:text-xl font-bold text-slate-700">Op. Dr. Barış Çin</div>
                         <div className="text-sm text-slate-600">Aesthetic Surgery Uzmanı</div>
                  </div>
                  </div>
                  </div>
                  
                  <button
                     onClick={() => window.open('https://wa.me/905438999586?text=Merhaba, ücretsiz danışmanlık almak istiyorum.', '_blank')}
                     className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                     </svg>
                     Ücretsiz Danışmanlık Al
                  </button>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                   <h3 className="text-2xl font-bold text-slate-800 mb-6">İletişim Bilgileri</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                       <Phone className="w-6 h-6 text-orange-500 mr-4" />
                       <span className="text-slate-700">+90 543 899 95 86</span>
                    </div>
                    <div className="flex items-center">
                       <Mail className="w-6 h-6 text-orange-500 mr-4" />
                       <span className="text-slate-700">drbariscin86@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                       <MapPin className="w-6 h-6 text-orange-500 mr-4" />
                       <span className="text-slate-700">Koşuyolu Mahallesi Mehmet Akfan Sokak No:19-21 Kadıköy İstanbul Türkiye</span>
                    </div>
                    <div className="flex items-center">
                       <Clock className="w-6 h-6 text-orange-500 mr-4" />
                       <span className="text-slate-700">Hafta içi: 09:00 - 18:00</span>
                    </div>
                  </div>
                </div>
                
                 <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Özel Kampanya! 🎉</h3>
                  <p className="text-lg opacity-90 mb-4">
                    İlk konsültasyonunuz tamamen ücretsiz! Bu fırsatı kaçırmayın.
                  </p>
                  <div className="text-sm opacity-75">
                    * Kampanya süresi sınırlıdır
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

             {/* Sabit WhatsApp Butonu */}
       <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
         <button
           onClick={() => window.open('https://wa.me/905438999586?text=Merhaba, ücretsiz danışmanlık almak istiyorum.', '_blank')}
           className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 font-semibold text-lg"
         >
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
           </svg>
           <span className="hidden sm:inline">Ücretsiz Danışmanlık</span>
           <span className="sm:hidden">Randevu</span>
         </button>
       </div>

       {/* Footer */}
       <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Op. Dr. Barış Çin
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Aesthetic Surgery uzmanı olarak, güzelliğinizi doğal yollarla ortaya çıkarıyoruz. Uzman kadromuz ve son teknoloji ekipmanlarımızla yanınızdayız.
            </p>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">
              © 2025 Op. Dr. Barış Çin - Aesthetic Surgery. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeautyLanding;