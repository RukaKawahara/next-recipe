"use client"

import Heading from "@/app/atom/Heading/Heading";
import style from './page.module.css';
import ReactMarkdown from 'react-markdown';
import { useEffect, useRef, useState } from "react";
import Button from "@/app/atom/Button/Button";
import { redirect, useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function EditRecipePage() {
  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipeToEdit = recipes.find((recipe:any) => recipe.id === id);

    if(recipeToEdit){
      setTitle(recipeToEdit.title);
      setMemo(recipeToEdit.memo);
    }
  },[id]);

  const handleUpdate = () => {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === id
        ? {...recipe, title, memo}
        : recipe
    );

    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    alert('レシピを更新しました！');
    redirect(`/detail/${id}`);
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if(file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
    setImagePreview("");
    const inputElement = fileInputRef.current as HTMLInputElement | null
    if(inputElement){
      inputElement.value = "";
    }
  };

  // メモリ解放
  useEffect(() => {
    return() => {
      if(imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    }
  },[imagePreview])

  return (
    <>
      <Heading level={2} className="page-heading">メモをする</Heading>
      <div className={style.post}>
        <form className={style['post-form']}>
          <label>
            <span className={style['post-title_label']}>料理名</span>
            <input
              type="text"
              value={title}
              className={style['post-title']}
              placeholder="料理名を入力しよう"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            <span className={style['post-textarea_label']}>材料・レシピ</span>
            <textarea
              value={memo}
              className={style['post-textarea']}
              placeholder="必要な材料やレシピを書こう！"
              onChange={(e) => setMemo(e.target.value)}
            />
          </label>
          <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef}/>
        </form>
        <div className={style.preview}>
          <h3>{title}</h3>
          <ReactMarkdown>{memo}</ReactMarkdown>
          {imagePreview && (
            <>
              <img src={imagePreview} alt="プレビュー"/>
              <button onClick={handleImageDelete}>×</button>
            </>
          )}
        </div>
      </div>
      <Button onClick={handleUpdate}>更新する</Button>
    </>
  );
}