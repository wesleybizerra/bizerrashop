import React from 'react';
import { Youtube, Instagram, Twitter, Tv } from 'lucide-react';

const TV: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-10 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Social Hero Section */}
        <div className="mb-16 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(255,100,0,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="bg-orange-500/10 p-4 rounded-full mb-6">
              <Tv size={48} className="text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              CONECTE-SE COM A GENTE
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Siga nossas redes sociais para ficar por dentro de todas as novidades, sorteios e transmissões exclusivas!
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
              <a 
                href="https://www.youtube.com/@WesleyBizerraYT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
              >
                <Youtube size={24} />
                INSCREVA-SE NO YOUTUBE
              </a>
              
              <a 
                href="https://www.instagram.com/wesleybizerraofc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                <Instagram size={24} />
                SIGA NO INSTAGRAM
              </a>

              <a 
                href="https://x.com/WesleyBizerraYT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-black border border-gray-700 hover:bg-gray-900 hover:border-gray-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <Twitter size={24} />
                SIGA NO X (Twitter)
              </a>
            </div>
          </div>
        </div>

        {/* Cartoons Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-3 h-8 bg-purple-500 rounded-sm"></span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">DESENHOS</h2>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl mb-12">
            <div className="w-full bg-black flex justify-center">
              <img 
                src="https://i.imgur.com/xSFGxHX.png" 
                alt="Gato Felix" 
                className="w-full h-auto max-h-[600px] object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-6 bg-gradient-to-r from-purple-900/40 to-black border-y border-gray-800 text-center">
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-widest">GATO FELIX</h3>
              <p className="text-purple-300 mt-2">Assista aos episódios clássicos</p>
            </div>

            <div className="p-4 md:p-8 space-y-12">
              
              {/* Ep 1 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 01</span>
                  Gato Felix Episódio 1 - A máquina de Poin Dexter
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                    poster="https://i.imgur.com/xSFGxHX.png"
                  >
                    <source src="https://www.dropbox.com/scl/fi/15zp3y2v8jo5zzc5go1z9/Gato-Felix-Epis-dio-1-A-m-quina-de-Poin-Dexter.mp4?rlkey=xx5nt0oti37s4f3dultu5xl5l&st=33yxyxxh&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 2 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 02</span>
                  Gato Felix Episódio 2 - Piquenique no passado
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/6c6d4an70vjbhmu045ykn/Gato-Felix-Epis-dio-2-Piquenique-no-passado.mp4?rlkey=2acak3ov84cok527uilhgywrk&st=ut6ybzvz&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 3 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 03</span>
                  Gato Felix Episódio 3 - Pepita de Ouro
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/aqdhtcx2l54qkbxocy90b/Gato-Felix-Epis-dio-3-Pepita-de-Ouro.mp4?rlkey=i7y4wu2srfkowjtfktma59r2z&st=bar00m97&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 4 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 04</span>
                  Gato Felix Episódio 4 - A fenda na represa
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/4kzzzglgqyan3uk5to9t6/Gato-Felix-Epis-dio-4-A-fenda-na-represa.mp4?rlkey=48kcs2sjzm3nb07eboubgzsze&st=027e1i4g&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 5 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 05</span>
                  Gato Felix Episódio 5 - O inseto dourado
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/o55q584ol5wssgittthlx/Gato-Felix-Epis-dio-5-O-inseto-dourado.mp4?rlkey=eis88vgp57o776zsj5u2nuq0m&st=gl0sjn53&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 6 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 06</span>
                  Gato Felix Episódio 6 - Torneio de mágicas
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/yv6bkq5nmn72tm1fyoacc/Gato-Felix-Epis-dio-6-Torneio-de-m-gicas.mp4?rlkey=whcapyqrddk33a98q8ea4orvs&st=do0fd8xo&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 7 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 07</span>
                  Gato Felix Episódio 7 - A Empregada Robô
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/zhkhzq0bjkjukgqv7clv0/Gato-Felix-Epis-dio-7-A-Empregada-Rob.mp4?rlkey=dgmxvplm2u10sf2g1hqiwj8ec&st=5dg7ax4j&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 8 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 08</span>
                  Gato Felix Episódio 8 - Pegando o grande Broly
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/v6l3ljnah0kd8mazkcahm/Gato-Felix-Epis-dio-8-Pegando-o-grande-Broly.mp4?rlkey=az0kdfloqbwhclcbt71hhkvj1&st=dh0bs404&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 9 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 09</span>
                  Gato Felix Episódio 9 - De volta ao tempo
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/pejg9sfwdsy226y3y9jbq/Gato-Felix-Epis-dio-9-De-volta-ao-tempo.mp4?rlkey=m6rgeojokmgn1hfsv6hqt5m2p&st=pp71eh06&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 10 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 10</span>
                  Gato Felix Episódio 10 - Ferias com o Senhor Bart
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/q2nfnjidzwy280yei7kmi/Gato-Felix-Epis-dio-10-Ferias-com-o-Senhor-Bart.mp4?rlkey=358taphaov4jhwr69v19l8ikr&st=mc5iwcv1&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 11 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 11</span>
                  Gato Felix Episódio 11 - Contatos Imediatos de Felix
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/mmgnm3qxlyqcnv95qxegk/Gato-Felix-Epis-dio-11-Contatos-Imediatos-de-Felix.mp4?rlkey=oxnb9o9iu754c337e2uly91ip&st=nqkfeikh&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 12 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 12</span>
                  Gato Felix Episódio 12 - Bolsas Mágicas Calças
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/33qr572sv5avwg485iqbm/Gato-Felix-Epis-dio-12-Bolsas-M-gicas-Cal-as.mp4?rlkey=j1ad8unjo29rhcyfdx7n7qrdw&st=n3yiqhxs&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 13 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 13</span>
                  Gato Felix Episódio 13 - A camara do Felix
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/u05919akk7dm76h6foey9/Gato-Felix-Epis-dio-13-A-camara-do-Felix.mp4?rlkey=85kb8yeri25byd2hzizmrf6ij&st=hw9lt8kd&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 14 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 14</span>
                  Gato Felix Episódio 14 - O Rei Leprechaun
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/i3dn64zlkiz2e8grg3la2/Gato-Felix-Epis-dio-14-O-Rei-Leprechaun.mp4?rlkey=6uzhx3cz857lmrw5ddw9lo3z5&st=asvw7409&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 15 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 15</span>
                  Gato Felix Episódio 15 - Perigo, monstro marinho
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/6uyrwenrpjz0pa5jwx9ob/Gato-Felix-Epis-dio-15-Perigo-monstro-marinho.mp4?rlkey=hd2jyk6hvgoomib415x9i9yf0&st=cwbgow25&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 16 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 16</span>
                  Gato Felix Episódio 16 - Felix pesca um gênio
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/5rm1xsss382l9t6i9d9yh/Gato-Felix-Epis-dio-16-Felix-pesca-um-g-nio.mp4?rlkey=st7rcve6snr2g8ki4zk132beb&st=jqeaeayi&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 17 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 17</span>
                  Gato Felix Episódio 17 - Salva o mestre cilindro
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/rzxi2zhhj53vcriwg3tl6/Gato-Felix-Epis-dio-17-Salva-o-mestre-cilindro.mp4?rlkey=bsfyn7pv77jutbrq4x4v8s5de&st=8pwoeq08&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 18 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 18</span>
                  Gato Felix Episódio 18 - O irmão caçula de Rock
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/h08jlek1cu5pn4rm7l5th/Gato-Felix-Epis-dio-18-O-irm-o-ca-ula-de-Rock.mp4?rlkey=oh0utcewv0hedx6jsc92709gf&st=8vdr82j2&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 19 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 19</span>
                  Gato Felix Episódio 19 - Maquina instantanea do clima
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/io1rvsheatuawd6vf75a2/Gato-Felix-Epis-dio-19-Maquina-instantanea-do-clima.mp4?rlkey=ekyrx8d2jfjhd72s52m6ogy1t&st=3ri7p5op&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 20 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 20</span>
                  Gato Felix Episódio 20 - Sandalias aladas do Rajah
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/475il7utjncxwewsg5a2c/Gato-Felix-Epis-dio-20-Sandalias-aladas-do-Rajah.mp4?rlkey=7go6xczz6vpiu349ltilurpul&st=66i4vvqy&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 21 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 21</span>
                  Gato Felix Episódio 21 - Livrando-se de Sniffer
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/n5l02r4p07fpkzus2p5gm/Gato-Felix-Epis-dio-21-Livrando-se-de-Sniffer.mp4?rlkey=jgitark7ef2vuvixa9qz9rotu&st=99ykcvfp&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 22 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 22</span>
                  Gato Felix Episódio 22 - O brinquedo de Poin Dexter
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/nbtvftjvsv2o9c7et5bbo/Gato-Felix-Epis-dio-22-O-brinquedo-de-Poin-Dexter.mp4?rlkey=ewh12bv722gtxfdsrshw3wswy&st=58mqr7av&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 23 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 23</span>
                  Gato Felix Episódio 23 - A maquina de miragem
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/j5ejx4z6a8s8g3yko5jk0/Gato-Felix-Epis-dio-23-A-maquina-de-miragem.mp4?rlkey=ddfw76hewrgu5lvvwleouwkc5&st=q9gba59h&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 24 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 24</span>
                  Gato Felix Episódio 24 - Gaitas de foles de ouro
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/y3j268xe9jhhblue6rfwx/Gato-Felix-Epis-dio-24-Gaitas-de-foles-de-ouro.mp4?rlkey=3lfb5ep6jq34d4p9dsrrtocsj&st=115mdhw5&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 25 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 25</span>
                  Gato Felix Episódio 25 - Cuide bem de Poin Dexter
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/qh6nr940uaz3hm94grpln/Gato-Felix-Epis-dio-25-Cuide-bem-de-Poin-Dexter.mp4?rlkey=6bwne6zqui7e5qb7lrn4bzytw&st=bae5c26a&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 26 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 26</span>
                  Gato Felix Episódio 26 - As mudanças do professor
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/dkacm9mghri1uad2up457/Gato-Felix-Epis-dio-26-As-mudan-as-do-professor.mp4?rlkey=mp92fqsf30197ifnpht8hmz0o&st=48sg8ykt&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 27 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 27</span>
                  Gato Felix Episódio 27 - Motor atomico
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/otn8eo0jnuxrfdnk6sa8s/Gato-Felix-Epis-dio-27-Motor-atomico.mp4?rlkey=mx4handjm3bwzj98n0k70my9c&st=qmj5r2vo&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 28 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 28</span>
                  Gato Felix Episódio 28 - Voltando 700 anos
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/hiooghh5g2aurjn3d0j5t/Gato-Felix-Epis-dio-28-Voltando-700-anos.mp4?rlkey=bdzqlwp7vbu0o1vh6v1lz4zfu&st=3jfcxg6h&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 29 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 29</span>
                  Gato Felix Episódio 29 - Pesquisa a jato
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/6nrjue0zqezvwvdgstoig/Gato-Felix-Epis-dio-29-Pesquisa-a-jato.mp4?rlkey=2ztatgti7i7r8zspek4hdkx3q&st=hecd81z8&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 30 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 30</span>
                  Gato Felix Episódio 30 - Procurando Combustível
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/3qfik85r8rt5gl7doo989/Gato-Felix-Epis-dio-30-Procurando-Combust-vel.mp4?rlkey=6y2fjhrgy9bvhrrq8uhhkjqce&st=aqnm4skn&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 31 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">EP 31</span>
                  Gato Felix Episódio 31 - Emprestimo para as férias
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/748t9fnhefga5ac2ytfo6/Gato-Felix-Epis-dio-31-Emprestimo-para-as-f-rias.mp4?rlkey=i2c7p2vzpiwijzahj4sv2w7sb&st=4y9tll68&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Anime Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-3 h-8 bg-orange-500 rounded-sm"></span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">ANIMES</h2>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl mb-12">
            <div className="w-full bg-black flex justify-center">
              <img 
                src="https://i.imgur.com/KyLx9Dq.png" 
                alt="Dragon Ball Clássico Dublado" 
                className="w-full h-auto max-h-[600px] object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-6 bg-gradient-to-r from-orange-900/40 to-black border-y border-gray-800 text-center">
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-widest">DRAGON BALL CLÁSSICO DUBLADO</h3>
              <p className="text-orange-300 mt-2">Todos os Episódios</p>
            </div>

            <div className="p-4 md:p-8 space-y-12">
              
              {/* Ep 1 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded-full">EP 01</span>
                  Dragon Ball Classico Dublado - Episódio 1
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                    poster="https://i.imgur.com/KyLx9Dq.png"
                  >
                    <source src="https://www.dropbox.com/scl/fi/ofn2vi8hbvl6zxq3x2rlx/Dragon-Ball-Classico-Dublado-Epis-dio-1.mp4?rlkey=4a69zvz69nws1m2jb5o5vwomi&st=pjmhb7ju&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 2 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded-full">EP 02</span>
                  Dragon Ball Classico Dublado - Episódio 2
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/8wfcpp7le9l08645nvu0i/Dragon-Ball-Classico-Dublado-Epis-dio-2.mp4?rlkey=g7fzfpxk7asgwqd8flhw6o5el&st=80ny1u76&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Ep 3 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded-full">EP 03</span>
                  Dragon Ball Classico Dublado - Episódio 3
                </h4>
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src="https://www.dropbox.com/scl/fi/v39fbf0bmww2eg27ocx3m/Dragon-Ball-Classico-Dublado-Epis-dio-3.mp4?rlkey=r8u260i8nut84x952c5pgna45&st=md6uk4z6&raw=1" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TV;
