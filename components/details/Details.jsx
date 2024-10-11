"use client";
import { useEffect, useState } from "react";
import { fetchDetailProducts } from "@/utils";
import { useParams } from "next/navigation";
import { BiArrowBack } from "react-icons/bi"; 
import Link from "next/link";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = await fetchDetailProducts(id);
        setProduct(data);
      } catch (err) {
        console.log("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen"><p className="text-center text-lg">Loading...</p></div>;

  return (
    <div className="p-6 max-w-3xl mx-auto relative">
      <Link 
        className="flex items-center p-3 bg-gradient-to-r from-red-600 to-black text-white rounded-lg hover:from-black hover:to-red-600 transition-all duration-300 absolute top-4 left-6 shadow-lg"
        href="/"
      >
        <BiArrowBack size={24} />
        <span className="ml-2">Назад</span>
      </Link>
      {product ? (
        <div className="bg-white rounded-xl shadow-xl p-8 mt-16 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
          <p className="text-lg text-gray-500 mb-6">Цена: <span className="text-2xl font-bold text-black">${product.price}</span></p>
          <img src={product.image} alt={product.title} className="w-full h-80 object-cover rounded-xl mb-6" />
          <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
          <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-black transition-all duration-300">
            Добавить в корзину
          </button>
        </div>
      ) : (
        <p className="text-center text-lg">No product found</p>
      )}
    </div>
  );
};

export default Details;
