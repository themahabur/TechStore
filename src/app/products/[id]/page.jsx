"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProductDetails({ params }) {
  const router = useRouter();
  const productId = parseInt(params.id);
  console.log(params);
    const { data: session } = useSession();

  const products = [
  {
    id: 1,
    title: "Bag",
    price: "$49",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAaojpNQQ1YvF_fgaSvPqANClEug5onZbCOmyt5eYooX1lf6cp_lO69E0FSf28U5c5oxNqIqMOzXeSiNkqC4wLxvMdp_0KxEDccpaZpd_QS1psaIlUosCiR908VKv8Z2i-XVdBx0t3i6kRnWYjKvFYIImjswutjyxVywU-vlti7B_cQGRNUGfudorcD5aqIV1vzIzlLg18w5O9NS8_0Fm63d7S1Q_mdAeH3Xm9R4tV1vnE2iOHuLRxUSmc6Y_992Ft55UbuPeiCKH-",
    description: "A stylish and spacious bag suitable for daily use, perfect for carrying essentials comfortably."
  },
  {
    id: 2,
    title: "Chair",
    price: "$69",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcAuQUUJzxFSyDuhnGG7wq8GrNXWD69JI6G5xGHGE-xWzdUJuC8g3Mq2JKhCQgfisK-Yo6o7d8KM9m1MTq_OrgTDR2ZwCYFOnj04mknHVVspXWtf64OnnBTmAS3P-NLR3DcORlkEMiqVU2k5sfH6BmBrrj-Tuaiif_iyY3yvDdguX2rymY0w7yPQXxXKkAo5nDzORNxONX_AtgNCFz6A2igpa2bOai3VB-U-iUTPpnmb0KQH1RLUGW5VU17qwndmcu9P9L5eXJGZqw",
    description: "Comfortable and durable chair ideal for home or office, designed to provide support during long hours of sitting."
  },
  {
    id: 3,
    title: "Pouch",
    price: "$29",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2Rq5zJcbOzdrsmOSJWPCGjM8jpCQfhunjBpcQvTgj1tyaFhhBdxh1gJC-fWyltp2wgkHZ9pFRFNgf_RdogthxAcIkHbHc5FfmVfiWkJvLxLMIFEMDRzKjswWgr7dQw-6-mRyv7lREVSTznST_RHIDlNU5fu5lkH6VPZ0PyNcd7sxbwJD1fwvWFlq5krY2a2g5relwikbHkfRqQq8FLdrsow9onlwO6WCszg1doqA5GlqIU5P5yyIK59JraWrNzkAzbsWGTvIqS-_Z",
    description: "Compact pouch perfect for organizing small items, travel essentials, or cosmetics in style."
  },
  {
    id: 4,
    title: "Sneaker",
    price: "$59",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHl2YCjHB27sh4Z1ClZGRM7S_BaiyuEuhmSnaTp_ALmuqH2dn9UzSCRjw-35SJK7OVuvR29jZiVxd5LBXATs6BOz24_AGJ_Wnb_kF9limv6I13yBylExWrZOovUS5a7SYDKTxm-7p8kTfkoQBFP5zm1kH0Z1M4oc1d1ci3ASenPmhdGY_IHqfXalyDoHY7eNtQRyW5CBFuPtwEthK0jCzFvqJ0ebcX9JS1iTaXebzTBm8SbfI3tR1QrrkgNhA6vFvQUk7QkmqVi1Ed",
    description: "Lightweight and trendy sneakers designed for casual wear and everyday comfort."
  },
  {
    id: 5,
    title: "Product One",
    price: "$99.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq5k_6aVadqgX2LXnpJMU9KLh93NkcB5Z1Pq5oOetdwFfsSM9SPbTvAUGuiiMv4Py9vPooDs7-N-MXuX0_IOb-VQtd1x2InjmYJWMKFJi_l8kvT7b5rsQE-pBvPYJuySsGJ6Cus97vmvNSFODKlgWzmA_hI-RikRUlieBQOWW79sTxYeiTnCj8A-hTPjGveYnSp2E2z8A0hDdeDH62JpGlemJTxCocpm6kTeoSoyfL2TXe2ocxj3reYcNIb_TCnuQXuQIK2o-5CqH0",
    description: "Premium quality product with versatile use, designed for functionality and long-lasting performance."
  },
  {
    id: 6,
    title: "Product Two",
    price: "$49.50",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkc3MTYB7Fpmzqlfy5brBR_TpouoS7vBTjvmtkxD5tBox-x0AeqZGQ2GEjrV3irFngyYDjS1ftYEPLPF-CvbQqV_SClcInGSOGWsKyViYsl4jvtDb64hL5Xp6I2mr_TleU6ou2tpqCSnO9IZnekm5Vh6FD222boJsCK9hA3DbfcYaiSOgGsYb36iyc-iPursjUH--al2V4ohCFeKUvomjJW9pmXcgHw_PS_j7zm_3PkuVWnn-46zMNN1yR7JqJcRiwm5yVQJL7ax5d",
    description: "Affordable and reliable product for everyday use, combining practicality and style."
  },
  {
    id: 7,
    title: "Product Three",
    price: "$129.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByJnZXjtNbf6_R-FbfRHV72uaWQlLZAtuhSNjCFFjeuWq56bHy0FdxsQDMrt5H2gzUHVe4HKAn9T8XKSVF7EAefzo7IvEm1Oamw3Gor-rTNtkZLiiFuzgoUKtZ1ZAIuQlf-69b1sSgI2ipG5QMQ3hQj0NuTD7nj--2KgpnhDTV65rHQWYQS0a-bFBpFGIElHdFcjulgbg2S6biL7vNCsgRnBZ4RxPeLZ90YkXd21zQbzlBmOf2c88fvAykKCLuauBMctnoMY3MLmRh",
    description: "High-end product made for discerning users who value quality and superior performance."
  },
  {
    id: 8,
    title: "Product Four",
    price: "$25.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA04O4O5tOZ8MauCxqpDtsGUxiD6f4UQf2IpB95NxqNB5ELoiI_C-mmmk19-iLLPfvd67u3zp08V_R_l2FRhFinUDUG78aI3fkfHSSOI0_45t-QwlhiHHHJF0eR781GmbbJq0GOeO8dkAAib_Xz4-9dHxWMt-8JFhEqRw_ICAkN3Nu44aoy6zQBP-d9z6_2Tw-cpMZXv6auEl-hsRLHzhXHxE9msqPECW2zlAcOx3hOiASiEaRTKHm_wC9aNnE403iRXRUNt4M_W3S",
    description: "Budget-friendly product suitable for daily needs, compact and easy to use."
  },
  {
    id: 9,
    title: "Product Five",
    price: "$79.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjWw0MoqHhQA8EmQqChixQvr3u7LfICIkUK2lpfTKRvcIApEZauk0gn5ipdHdE4We0iHm8pbi7KHLqThU9bCmbkp1snlaVo09twRy4dInng1wphgNzOeS_gLAoUf4eaHL1v3DXoj9UkPe4XGw93Hlzf-RqmCDPfFZyOYSl-gPLG8xKvc25dEdmtU3wRO0y3_UO4UfsPZCy_Cn2lm_HnNNLrEF6wyMrnTiaWwFHwS0ZqXu54C0ZMa1l9T7iKa2AC4iXFLT9rNp88hqZ",
    description: "Reliable mid-range product offering a balance of quality, durability, and affordability."
  },
  {
    id: 10,
    title: "Product Six",
    price: "$149.99",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdoFvdXQabewDwsLR_Kw2xN5bYxlIoJZOe8WReMqTnXsuAlTSK9eTkyP2nlATtjLsVPnrczd9VH1J4hpT6x_WXqze99FhbmFDiVoO-k_F3MsZVneeGm9fntdxGGeVA4feeXw2yvSJEfmTv3ahx5sUIoOssC5vvzGIfdBTRbsDSUWgLo8REjLjQFAMsxNMnUATT5Spad07YCfyNaJGcFMiwlcXxB4N62WmzvdtCpE14Gxh0UjU-LYI_51Mc26S59Iaesu51IqucfHjr",
    description: "Premium and feature-rich product ideal for users looking for advanced functionality and quality."
  },
  {
    id: 11,
    title: "Product Seven",
    price: "$85.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqFQRxaSVOtFoHQVDgwA8lDDAkT0iZ_FoP-ApBiNxxPTxqbVRjsICyCXPNvp4qDkYbakRC_amM2spKLF4KvCPcy2_IAPOKnzYqfwxr2QwQrsb5Ib4NusY2kiF80jnQEP6Z5sDDidN7cXsvRIlo5ead8lV5hwk3YfeBjea6rlQFSjfyHkEgNFcE6SVBLZHvWqFCv8-p_WmhpQqnb8wbE9hU75SeAqUBEzJ5YbBYyAqoLCMbXoIhpTHealMR_Yx6w9nJ_T8jFvSrc07O",
    description: "Versatile and stylish product designed to meet a variety of needs while maintaining high quality."
  },
  {
    id: 12,
    title: "Product Eight",
    price: "$199.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp7yOKhHb1XOTEXZ3_Y3v14cwQ5AHGYAQdIp0g8GL7HHyK_sLAcGYNYwD3dWCiHC9BvUzzD0cdiruW4sNeeWMNdpeKxlVLr5HuWGf2NTupEsl1xyVH52oEZ6v9DwQ6PsbJcgMQlMONzLEFMRy9PDSxVzAfsv81S02riPHR2eBdLib_qS20uNKXEKCGsknb5CCpBzuAgAeaUBDXowUR1PJgQpAv9Q0K6-Jz67eDIXuQlB1s5oVdj4kSllZu1THL7J513xUVZCAjYifx",
    description: "High-end product with superior quality and durability, ideal for those who want the best."
  },
];



  const product = products.find((p) => p.id === productId);
  
  if(!session){
    // User is not logged in, you can show login prompt
    router.push("/login");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden max-w-5xl w-full">
        {/* Left: Product Image */}
        <div className="md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-xl font-semibold text-blue-600 mt-2">
            {product.price}
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button
              onClick={() => router.back()}
              className="flex-1 px-6 py-3 border font-semibold text-gray-700 rounded-md hover:bg-gray-100 transition text-center"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
