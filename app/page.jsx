'use client';

import { useLenis } from '@studio-freight/react-lenis';

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    console.log(scroll);
  });

  return (
    <main className="p-16 xl:p-32 flex flex-col w-full items-center justify-center">
      <h1 id="last-image" className="font-medium text-4xl border border-solid border-white p-4 mb-5" >
        Smooth Scolling Using Lenis
      </h1>
      <h1
        className="font-medium text-4xl border border-solid border-white p-4"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        accusamus et autem molestiae, recusandae, quam temporibus expedita
        itaque ut earum maiores laborum! Voluptate placeat iste nisi odio cumque
        adipisci veritatis exercitationem eum possimus voluptas consectetur
        impedit, sunt eligendi quasi obcaecati magnam. Excepturi provident quam
        quaerat sed enim quod ut, quasi reprehenderit iusto sit, at iure
        perferendis pariatur inventore quos consequuntur! Magni ducimus,
        temporibus possimus et doloremque eligendi dolores deserunt totam
        minima, iure consequatur debitis. Obcaecati quaerat minus delectus
        placeat a eius cum debitis, consequuntur necessitatibus possimus eveniet
        velit molestiae voluptatem expedita deserunt laborum natus quibusdam
        exercitationem tempora ipsam cumque! Rerum quibusdam aliquam, quia sed
        corrupti officiis facilis, a labore alias placeat vel minima. Molestias
        modi id numquam officia aperiam amet delectus, repellendus temporibus ad
        corporis impedit, illo quod mollitia fugit esse quasi tenetur molestiae
        suscipit sequi repudiandae facere! At est repellendus voluptatum,
        tenetur dolore, similique beatae nisi eligendi vitae neque assumenda
        itaque fugiat facere error molestias magni aut eos quaerat doloremque
        nobis quas corrupti fugit iusto. Sed, tempore sint assumenda ad numquam
        corrupti illum omnis saepe iusto non nemo aliquam tempora sequi eaque
        animi minus ipsa velit voluptatum eveniet. Libero commodi veniam optio
        incidunt accusantium suscipit veritatis hic odio quae, iusto natus quam
        explicabo assumenda minus maxime rem, molestiae sapiente. Nam laborum et
        consectetur, totam cumque ratione neque, quae labore quo ipsum ducimus
        distinctio facere enim, odio eaque. Iste quia molestiae a molestias
        illum corrupti repellat. Doloremque excepturi nobis adipisci minus
        porro, sapiente impedit necessitatibus pariatur autem iste? Perferendis,
        reiciendis ab placeat suscipit similique dolorem maxime nostrum
        molestiae. Exercitationem consequatur iusto, cupiditate, non corrupti
        pariatur perspiciatis maxime beatae ducimus labore officia modi ratione
        at nemo velit ipsum natus aliquid nesciunt consectetur autem repudiandae
        iure vitae sapiente mollitia. Voluptas blanditiis sequi qui cumque eos
        iure nisi, assumenda non commodi eligendi vero exercitationem in
        expedita reiciendis quaerat quod nobis! Debitis neque corrupti est. Cum,
        necessitatibus maiores assumenda excepturi veniam vel voluptatum hic
        alias velit debitis doloribus dicta, aliquam perspiciatis mollitia unde,
        totam praesentium quis error illo fugit? Accusantium repudiandae
        accusamus aliquid facere a provident, nostrum commodi saepe molestiae
        ipsam soluta inventore, nam optio iste deserunt tenetur minus?
        Dignissimos distinctio, quibusdam laudantium voluptas pariatur nostrum
        culpa, eius quod, molestiae obcaecati aperiam quisquam. Veniam in ex ad
        repellendus. Doloribus incidunt nihil ullam! Sequi neque nesciunt, quo
        facere consectetur quae ab ex architecto eum repellat tempore fugit,
        numquam accusamus iste ullam aliquid porro molestiae asperiores enim
        eveniet! Eaque sunt repudiandae earum est ipsam, voluptas delectus
        dignissimos minima rem suscipit, neque inventore. Quae molestiae eveniet
        et sint doloribus! Alias sit ipsam facilis? Nihil quod accusamus,
        placeat numquam quas laboriosam veritatis, quae, sapiente fuga beatae
        quam. Quam quisquam nam optio officiis consectetur eos, incidunt sed
        fuga. Voluptatem quasi, voluptatum ducimus libero natus veniam facilis?
        Accusamus vel architecto quas harum nostrum, saepe itaque repudiandae
        odio fugiat impedit tenetur voluptatibus sed eaque iure atque enim
        aperiam! Optio quis inventore omnis quae veritatis sed nulla veniam odit
        facere rerum nemo magnam, dicta explicabo adipisci animi nostrum est.
        Velit, nobis consequuntur?
      </h1>
      <button
        href="#last-image"
        onClick={() => lenis.scrollTo('#last-image', { lerp: 0.01 })}
        className="bg-white text-black capitalize p-4 font-semibold text-xl mt-16 hover:bg-white/90"
      >
        scroll to anchor
      </button>
    </main>
  );
}
