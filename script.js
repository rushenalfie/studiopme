{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const fontBank = [\
    'Peix', \
    'Reinkies', \
    'Madelyn-Regular', \
    'Linea', \
    'Bigilla', \
    'Nudles-Regular', \
    'Cormorant-Regular', \
    'HeritageModerneTT-Regular', \
    'Barlaxent'\
];\
\
const title = document.getElementById('mainTitle');\
const stage = document.getElementById('stage');\
let hoverId = null;\
\
function setRandomFont() \{\
    title.style.fontFamily = fontBank[Math.floor(Math.random() * fontBank.length)];\
\}\
\
// Background hover logic\
stage.addEventListener('mouseenter', () => \{\
    hoverId = setInterval(setRandomFont, 80);\
\});\
\
stage.addEventListener('mouseleave', () => \{\
    clearInterval(hoverId);\
    title.style.fontFamily = 'inherit'; \
\});\
\
// Initial load flash\
let flashCount = 0;\
const initialFlash = setInterval(() => \{\
    setRandomFont();\
    flashCount++;\
    if (flashCount > 12) \{\
        clearInterval(initialFlash);\
        title.style.fontFamily = 'inherit';\
    \}\
\}, 60);}