import React from "react";

const Address = () => {
  const urlMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.9629145816643!2d109.02071148466682!3d-6.849019536625204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb03eff414865%3A0x1e022dbfad8faf39!2sINDOMARET%20SAWOJAJAR!5e1!3m2!1sen!2sid!4v1768445302941!5m2!1sen!2sid";
  return (
    <>
      <section id="about" className="py-20 bg-light">
       
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="lg:w-1/2">
              <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
                Lokasi Kami
              </h4>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                Membangun Bangunan Baru
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>CV Bumi Sari Hijau </strong>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Iure molestias obcaecati, iste
                blanditiis animi nisi beatae, sapiente, temporibus odio sunt
                voluptatem? Deserunt perferendis doloribus pariatur vitae odio
                esse sed aliquid error. Nisi quibusdam fuga facere?
                Reprehenderit laudantium non quam voluptatum provident
                consectetur quas architecto porro praesentium, maiores numquam
                vel dolores!
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
                odio. Necessitatibus officia quam molestias autem, dolor porro
                minus omnis voluptate.
              </p>
            </div>
            <iframe
              title="lokasi"
              src={`${urlMap}`}
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              className="w-full lg:w-1/2 h-[70vh] rounded-lg shadow-[0px_0px_10px_2px_#00000024]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Address;
