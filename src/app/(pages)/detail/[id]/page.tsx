"use client"

import Link from "next/link";
import style from "./page.module.css";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import Button from "@/app/atom/Button/Button";

export default function Detail() {
  const { id } = useParams();
  const [allRecipes, setAllRecipes] = useState<{id: string; title: string; memo: string; createAt: string}[]>([]);
  const [recipe, setRecipe] = useState<{id: string; title: string; memo: string; createAt: string}>();

  useEffect(() => {
    const saveRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    if(saveRecipes){
      setAllRecipes(saveRecipes);
      const foundRecipe = saveRecipes.find((recipe:any) => recipe.id === id);

      if(foundRecipe){
        setRecipe(foundRecipe);
      }
    }
  },[]);

  const handleDelete = () => {
    const updatedRecipes = allRecipes.filter((recipe) => recipe.id !== id);
    setAllRecipes(allRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    alert('レシピを削除しました！');
    redirect('/');
  }

  return (
    <>
      {recipe ? (
        <div className={style['detail']}>
          <div>
            <h3>{recipe.title}</h3>
            <ReactMarkdown>{recipe.memo}</ReactMarkdown>
          </div>
          <div>
            <img src="/takorice.jpg" />
          </div>
        </div>
      )
      :
      <p>見つかりませんでした</p>
      }
    <Button href={`/detail/${id}/edit`}>編集する</Button>
    <Button onClick={handleDelete}>削除する</Button>
    </>
  );
}
