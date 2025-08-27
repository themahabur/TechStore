import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";


export default function Home() {
const products = [
  {
    id: 1,
    title: "Bag",
    price: "$49",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAaojpNQQ1YvF_fgaSvPqANClEug5onZbCOmyt5eYooX1lf6cp_lO69E0FSf28U5c5oxNqIqMOzXeSiNkqC4wLxvMdp_0KxEDccpaZpd_QS1psaIlUosCiR908VKv8Z2i-XVdBx0t3i6kRnWYjKvFYIImjswutjyxVywU-vlti7B_cQGRNUGfudorcD5aqIV1vzIzlLg18w5O9NS8_0Fm63d7S1Q_mdAeH3Xm9R4tV1vnE2iOHuLRxUSmc6Y_992Ft55UbuPeiCKH-",
  },
  {
    id: 2,
    title: "Chair",
    price: "$69",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcAuQUUJzxFSyDuhnGG7wq8GrNXWD69JI6G5xGHGE-xWzdUJuC8g3Mq2JKhCQgfisK-Yo6o7d8KM9m1MTq_OrgTDR2ZwCYFOnj04mknHVVspXWtf64OnnBTmAS3P-NLR3DcORlkEMiqVU2k5sfH6BmBrrj-Tuaiif_iyY3yvDdguX2rymY0w7yPQXxXKkAo5nDzORNxONX_AtgNCFz6A2igpa2bOai3VB-U-iUTPpnmb0KQH1RLUGW5VU17qwndmcu9P9L5eXJGZqw",
  },
  {
    id: 3,
    title: "Pouch",
    price: "$29",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2Rq5zJcbOzdrsmOSJWPCGjM8jpCQfhunjBpcQvTgj1tyaFhhBdxh1gJC-fWyltp2wgkHZ9pFRFNgf_RdogthxAcIkHbHc5FfmVfiWkJvLxLMIFEMDRzKjswWgr7dQw-6-mRyv7lREVSTznST_RHIDlNU5fu5lkH6VPZ0PyNcd7sxbwJD1fwvWFlq5krY2a2g5relwikbHkfRqQq8FLdrsow9onlwO6WCszg1doqA5GlqIU5P5yyIK59JraWrNzkAzbsWGTvIqS-_Z",
  },
  {
    id: 4,
    title: "Sneaker",
    price: "$59",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHl2YCjHB27sh4Z1ClZGRM7S_BaiyuEuhmSnaTp_ALmuqH2dn9UzSCRjw-35SJK7OVuvR29jZiVxd5LBXATs6BOz24_AGJ_Wnb_kF9limv6I13yBylExWrZOovUS5a7SYDKTxm-7p8kTfkoQBFP5zm1kH0Z1M4oc1d1ci3ASenPmhdGY_IHqfXalyDoHY7eNtQRyW5CBFuPtwEthK0jCzFvqJ0ebcX9JS1iTaXebzTBm8SbfI3tR1QrrkgNhA6vFvQUk7QkmqVi1Ed",
  },
];




  return (
    <main>
     
      <Hero />

      <section className="flex justify-center gap-6 flex-wrap py-16 bg-gray-50">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>

      
    </main>
  );
}
