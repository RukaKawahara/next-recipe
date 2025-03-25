"use client"

import { useEffect, useState } from "react";
import Heading from "../atom/Heading/Heading";
import Card from "../molecules/Card/Card";
import styles from "./page.module.css";

export default function Home() {
  const [recipes, setRecipes] = useState<{id: string; title: string; memo: string; createAt: string}[]>([]);
  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipes');
    if(savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    } else{
      setRecipes([]);
    }
  },[]);

  console.log(recipes);
  return (
    <div className={styles.page}>
      <Heading level={2} className="page-heading">レシピ一覧</Heading>
        {recipes.length > 0 ? (
          <div className={styles.card} key={'card'}>
            {recipes.map(recipe => (
              <Card
                key={recipe.id}
                link={`detail/${recipe.id}`}
                image={'/takorice.jpg'}
                title={recipe.title}
                date={recipe.createAt}
              />
            ))}
          </div>
        )
        :
          <p>登録されているレシピがありません! 登録してみましょう。</p>
        }
    </div>
  );
}
