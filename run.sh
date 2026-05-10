#!/bin/bash

# تشغيل البورتفوليو

echo "🚀 بدء تشغيل بورتفوليو سارة الاحترافي..."
echo ""
echo "📂 المسار: /vercel/share/v0-project"
echo ""

cd /vercel/share/v0-project

echo "⏳ تثبيت المتطلبات..."
pnpm install

echo ""
echo "✅ المتطلبات جاهزة!"
echo ""
echo "🌍 تشغيل الموقع المحلي..."
echo "الموقع سيكون متاح على: http://localhost:3000"
echo ""

pnpm dev
