# Estructura de Componentes

Esta carpeta contiene todos los componentes de la aplicación organizados de manera modular y escalable.

## 📁 Estructura de Carpetas

```
src/components/
├── ui/                    # Componentes reutilizables (Design System)
│   ├── Button.astro      # Botones con diferentes variantes
│   ├── Card.astro        # Tarjetas con diferentes estilos
│   ├── Icon.astro        # Iconos SVG centralizados
│   └── index.ts          # Exportaciones centralizadas
│
├── sections/             # Secciones específicas de páginas
│   ├── Hero.astro        # Sección hero de landing
│   ├── Services.astro    # Sección de servicios
│   ├── About.astro       # Sección acerca de
│   ├── Portfolio.astro   # Sección de portafolio
│   ├── Testimonials.astro# Sección de testimonios
│   ├── Contact.astro     # Sección de contacto
│   ├── Footer.astro      # Pie de página
│   └── index.ts          # Exportaciones centralizadas
│
└── Welcome.astro         # Página principal que usa las secciones
```

## 🎨 Componentes UI (Reutilizables)

### Button.astro
Componente de botón con múltiples variantes y tamaños.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `href`: string (opcional, convierte en enlace)
- `type`: 'button' | 'submit' | 'reset'
- `disabled`: boolean
- `fullWidth`: boolean

**Ejemplo:**
```astro
<Button variant="primary" size="lg" href="#contacto">
  Ver Servicios
</Button>
```

### Card.astro
Componente de tarjeta con diferentes estilos y efectos.

**Props:**
- `variant`: 'default' | 'gradient' | 'glass' | 'hover-lift'
- `padding`: 'sm' | 'md' | 'lg'
- `rounded`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
- `shadow`: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `border`: boolean

**Ejemplo:**
```astro
<Card variant="hover-lift" padding="lg" rounded="3xl">
  <h3>Título de la tarjeta</h3>
  <p>Contenido de la tarjeta</p>
</Card>
```

### Icon.astro
Componente de iconos SVG centralizados con tamaños consistentes.

**Props:**
- `name`: string (nombre del icono)
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `color`: string (color CSS)

**Iconos disponibles:**
- Social: `twitter`, `linkedin`, `instagram`, `pinterest`
- UI: `chevron-down`, `chevron-right`, `arrow-right`, `mail`, `phone`, `map-pin`, `star`, `check`
- Otros: `code`, `palette`, `smartphone`, `globe`, `bar-chart`, `shopping`, `zap`

**Ejemplo:**
```astro
<Icon name="star" size="md" color="gold" />
```

## 🏗️ Secciones de Página

Los componentes en `sections/` son específicos para la landing page y utilizan los componentes UI para mantener consistencia visual.

### Uso e Importación

**Importación individual:**
```astro
import Button from '../ui/Button.astro';
import Card from '../ui/Card.astro';
```

**Importación centralizada (recomendado):**
```astro
import { Button, Card, Icon } from '../ui';
```

## 📏 Convenciones

1. **Componentes UI**: Deben ser completamente reutilizables y no contener lógica específica de negocio
2. **Secciones**: Pueden usar componentes UI y contener lógica específica de la página
3. **Props**: Siempre definir interfaces TypeScript para mejor DX
4. **Naming**: PascalCase para componentes, camelCase para props
5. **Documentación**: Cada componente debe tener ejemplos de uso

## 🎯 Beneficios

- ✅ **Separación clara** entre componentes reutilizables y específicos
- ✅ **Escalabilidad** fácil agregar nuevas páginas y componentes
- ✅ **Mantenibilidad** cambios centralizados
- ✅ **Consistencia** design system unificado
- ✅ **Developer Experience** importaciones limpias y tipado