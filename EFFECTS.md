# Efectos 3D y Parallax Implementados

## 🎨 Componente Text3D

### Características
- **Efecto de profundidad**: Uso de `text-shadow` generado dinámicamente para crear la ilusión de profundidad 3D
- **Gradientes de color**: Diferentes esquemas de color (primary, secondary, accent, white) con degradados
- **Tamaños responsivos**: Desde `sm` hasta `2xl` que se adaptan a diferentes pantallas
- **Animaciones suaves**: Transiciones y efectos hover con `cubic-bezier`

### Configuraciones de Color
```astro
- primary: Gradiente púrpura a rosa
- secondary: Gradiente amarillo a naranja  
- accent: Gradiente verde a azul
- white: Blanco puro con sombra gris
```

### Uso
```astro
<Text3D 
  text="Tu texto aquí" 
  size="xl" 
  color="primary" 
  depth={8}
  class="mi-clase-personalizada"
/>
```

## 🌊 Sistema de Parallax con GSAP + Lenis

### Animaciones Implementadas

#### 1. **Hero 3D Text Parallax**
- Los textos aparecen desde la distancia (z: -500px)
- Se acercan al usuario con rotación y escala
- Parallax continuo mientras se hace scroll
- Efecto de aproximación realista

#### 2. **Background Parallax**
- Elementos de fondo se mueven a diferentes velocidades
- Crea sensación de profundidad y movimiento
- Sincronizado con el scroll suave de Lenis

#### 3. **Animaciones Adicionales**
- **Fade In Up**: Elementos aparecen desde abajo con fade
- **Scale In**: Elementos aparecen con efecto de escala
- **Stagger**: Animaciones escalonadas para listas

### Configuración Técnica
- **Lenis**: Smooth scrolling con easing personalizado
- **GSAP ScrollTrigger**: Animaciones basadas en scroll
- **Transform 3D**: Uso de `preserve-3d` y `perspective`

## 🛠️ Estructura de Archivos

```
src/
├── components/
│   ├── ui/
│   │   └── Text3D.astro       # Componente de texto 3D
│   └── sections/
│       └── Hero.astro         # Hero con efectos 3D
├── scripts/
│   └── animations.ts          # Sistema de animaciones GSAP
└── layouts/
    └── Layout.astro           # Estilos globales 3D
```

## 🎯 Efectos Visuales Logrados

1. **Profundidad Visual**: Las letras parecen tener volumen real
2. **Movimiento Parallax**: Sensación de inmersión y profundidad
3. **Colores Dinámicos**: Gradientes que dan vida al texto
4. **Interactividad**: Efectos hover suaves y naturales
5. **Responsividad**: Adaptación a diferentes dispositivos

## 🚀 Rendimiento

- **CSS transforms**: Uso de propiedades aceleradas por GPU
- **will-change**: Optimización para animaciones
- **backface-visibility**: Mejor rendimiento 3D
- **Lazy animation**: Animaciones solo cuando son necesarias

## 💡 Próximas Mejoras

- [ ] Efectos de partículas 3D
- [ ] Más variaciones de color
- [ ] Animaciones de entrada personalizables
- [ ] Efectos de tilt interactivos
- [ ] Integración con mouse tracking

---
**Tecnologías**: Astro 5.14.1, GSAP 3.13.0, Lenis 1.3.11, Tailwind CSS v4