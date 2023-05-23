import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NewsPage } from 'pages/NewsPage';
import { TrashPage } from 'pages/TrashPage';
import { CatalogPage } from 'pages/CatalogPage';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path={'/trash'} element={<TrashPage />} />
        <Route path={'/news'} element={<NewsPage />} />
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/catalog'} element={<CatalogPage />} />
      </Routes>
    </Suspense>
  );
};
