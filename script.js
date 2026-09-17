const T = {
  breathe: {
    bg: '#08131a', accentHex: '#38bdf8', textMain: '#e0f2fe', textDim: '#7dd3fc', textFaint: 'rgba(224, 242, 254, 0.45)',
    navBg: 'rgba(8, 19, 26, 0.85)', navBorder: 'rgba(56, 189, 248, 0.3)',
    pillActive: '#0369a1', pillDim: 'rgba(224, 242, 254, 0.7)', pillActiveBg: '#38bdf8',
    thumbBg: 'rgba(56, 189, 248, 0.45)', vigA: 'rgba(12, 35, 48, 0.6)', vigB: 'rgba(4, 10, 15, 0.95)',
    panel: 'rgba(15, 32, 45, 0.65)', panelSolid: '#0f202d', border: 'rgba(56, 189, 248, 0.2)', borderSoft: 'rgba(56, 189, 248, 0.1)'
  },
  meditate: {
    bg: '#120d1c', accentHex: '#a855f7', textMain: '#f3e8ff', textDim: '#c084fc', textFaint: 'rgba(243, 232, 255, 0.45)',
    navBg: 'rgba(18, 13, 28, 0.85)', navBorder: 'rgba(168, 85, 247, 0.3)',
    pillActive: '#581c87', pillDim: 'rgba(243, 232, 255, 0.7)', pillActiveBg: '#a855f7',
    thumbBg: 'rgba(168, 85, 247, 0.45)', vigA: 'rgba(30, 18, 48, 0.6)', vigB: 'rgba(10, 6, 18, 0.95)',
    panel: 'rgba(28, 20, 44, 0.65)', panelSolid: '#1c142c', border: 'rgba(168, 85, 247, 0.2)', borderSoft: 'rgba(168, 85, 247, 0.1)'
  },
  anxiety: {
    bg: '#0e0904', accentHex: '#e86026', textMain: '#ede7d8', textDim: 'rgba(245, 238, 220, 0.65)', textFaint: 'rgba(245, 238, 220, 0.4)',
    navBg: 'rgba(14, 6, 2, 0.82)', navBorder: 'rgba(232, 96, 38, 0.28)',
    pillActive: '#fff0e0', pillDim: 'rgba(245, 225, 200, 0.82)', pillActiveBg: '#e86026',
    thumbBg: 'rgba(232, 96, 38, 0.45)', vigA: 'rgba(25, 14, 8, 0.54)', vigB: 'rgba(4, 2, 0, 0.92)',
    panel: 'rgba(28, 18, 12, 0.65)', panelSolid: '#1c120c', border: 'rgba(232, 96, 38, 0.25)', borderSoft: 'rgba(232, 96, 38, 0.12)'
  },
  nature: {
    bg: '#08140c', accentHex: '#22c55e', textMain: '#dcfce7', textDim: '#86efac', textFaint: 'rgba(220, 252, 231, 0.45)',
    navBg: 'rgba(8, 20, 12, 0.85)', navBorder: 'rgba(34, 197, 94, 0.3)',
    pillActive: '#14532d', pillDim: 'rgba(220, 252, 231, 0.7)', pillActiveBg: '#22c55e',
    thumbBg: 'rgba(34, 197, 94, 0.45)', vigA: 'rgba(15, 38, 22, 0.6)', vigB: 'rgba(4, 12, 6, 0.95)',
    panel: 'rgba(18, 38, 24, 0.65)', panelSolid: '#122618', border: 'rgba(34, 197, 94, 0.2)', borderSoft: 'rgba(34, 197, 94, 0.1)'
  },
  classical: {
    bg: '#141210', accentHex: '#d97706', textMain: '#fef3c7', textDim: '#fcd34d', textFaint: 'rgba(254, 243, 199, 0.45)',
    navBg: 'rgba(20, 18, 16, 0.85)', navBorder: 'rgba(217, 119, 6, 0.3)',
    pillActive: '#78350f', pillDim: 'rgba(254, 243, 199, 0.7)', pillActiveBg: '#d97706',
    thumbBg: 'rgba(217, 119, 6, 0.45)', vigA: 'rgba(38, 32, 24, 0.6)', vigB: 'rgba(12, 10, 8, 0.95)',
    panel: 'rgba(34, 28, 22, 0.65)', panelSolid: '#221c16', border: 'rgba(217, 119, 6, 0.2)', borderSoft: 'rgba(217, 119, 6, 0.1)'
  },
  jazz: {
    bg: '#180a14', accentHex: '#ec4899', textMain: '#fce7f3', textDim: '#f472b6', textFaint: 'rgba(252, 231, 243, 0.45)',
    navBg: 'rgba(24, 10, 20, 0.85)', navBorder: 'rgba(236, 72, 153, 0.3)',
    pillActive: '#831843', pillDim: 'rgba(252, 231, 243, 0.7)', pillActiveBg: '#ec4899',
    thumbBg: 'rgba(236, 72, 153, 0.45)', vigA: 'rgba(42, 16, 36, 0.6)', vigB: 'rgba(14, 5, 12, 0.95)',
    panel: 'rgba(38, 18, 32, 0.65)', panelSolid: '#261220', border: 'rgba(236, 72, 153, 0.2)', borderSoft: 'rgba(236, 72, 153, 0.1)'
  },
  sunset: {
    bg: '#18080c', accentHex: '#f43f5e', textMain: '#ffe4e6', textDim: '#fda4af', textFaint: 'rgba(255, 228, 230, 0.45)',
    navBg: 'rgba(24, 8, 12, 0.85)', navBorder: 'rgba(244, 63, 94, 0.3)',
    pillActive: '#881337', pillDim: 'rgba(255, 228, 230, 0.7)', pillActiveBg: '#f43f5e',
    thumbBg: 'rgba(244, 63, 94, 0.45)', vigA: 'rgba(45, 12, 20, 0.6)', vigB: 'rgba(15, 4, 7, 0.95)',
    panel: 'rgba(40, 15, 22, 0.65)', panelSolid: '#280f16', border: 'rgba(244, 63, 94, 0.2)', borderSoft: 'rgba(244, 63, 94, 0.1)'
  },
  teal: {
    bg: '#041416', accentHex: '#14b8a6', textMain: '#ccfbf1', textDim: '#5eead4', textFaint: 'rgba(204, 251, 241, 0.45)',
    navBg: 'rgba(4, 20, 22, 0.85)', navBorder: 'rgba(20, 184, 166, 0.3)',
    pillActive: '#134e4a', pillDim: 'rgba(204, 251, 241, 0.7)', pillActiveBg: '#14b8a6',
    thumbBg: 'rgba(20, 184, 166, 0.45)', vigA: 'rgba(10, 38, 40, 0.6)', vigB: 'rgba(2, 10, 12, 0.95)',
    panel: 'rgba(12, 35, 38, 0.65)', panelSolid: '#0c2326', border: 'rgba(20, 184, 166, 0.2)', borderSoft: 'rgba(20, 184, 166, 0.1)'
  }
};

const DAY_THEMES = {
  lunes: 'breathe', martes: 'meditate', miercoles: 'anxiety', jueves: 'nature',
  viernes: 'classical', sabado: 'jazz', domingo: 'sunset', semana: 'teal'
};

let userProfile = {
  weight: 70,
  goal: 'mantener' // 'bajar', 'mantener', 'subir'
};

function switchTheme(themeKey) {
  const theme = T[themeKey];
  if (!theme) return;
  const root = document.documentElement;
  root.style.setProperty('--bg', theme.bg);
  root.style.setProperty('--accent', theme.accentHex);
  root.style.setProperty('--accent-hex', theme.accentHex);
  root.style.setProperty('--text-main', theme.textMain);
  root.style.setProperty('--text-dim', theme.textDim);
  root.style.setProperty('--text-faint', theme.textFaint);
  root.style.setProperty('--nav-bg', theme.navBg);
  root.style.setProperty('--nav-border', theme.navBorder);
  root.style.setProperty('--pill-active', theme.pillActive);
  root.style.setProperty('--pill-dim', theme.pillDim);
  root.style.setProperty('--pill-active-bg', theme.pillActiveBg);
  root.style.setProperty('--thumb-bg', theme.thumbBg);
  root.style.setProperty('--vig-a', theme.vigA);
  root.style.setProperty('--vig-b', theme.vigB);
  root.style.setProperty('--panel', theme.panel);
  root.style.setProperty('--panel-solid', theme.panelSolid);
  root.style.setProperty('--border', theme.border);
  root.style.setProperty('--border-soft', theme.borderSoft);
}

const DAYS = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
const DAY_NAMES = {
  lunes: 'Lunes', martes: 'Martes', miercoles: 'Miércoles', jueves: 'Jueves',
  viernes: 'Viernes', sabado: 'Sábado', domingo: 'Domingo'
};

const MEALS = [
  { id: 'desayuno', label: 'Desayuno' },
  { id: 'almuerzo', label: 'Almuerzo' },
  { id: 'cena', label: 'Cena' }
];

const CATEGORIES = [
  { id: 'todas', label: 'Todas' },
  { id: 'granos', label: 'Granos / Cereales' },
  { id: 'carnes', label: 'Carnes / Proteínas' },
  { id: 'verduras', label: 'Verduras' },
  { id: 'frutas', label: 'Frutas' },
  { id: 'lacteos', label: 'Lácteos' },
  { id: 'procesados', label: 'Procesados / Snacks' }
];

const FOOD_DATABASE = {
  granos: [
    { id: 'arroz_blanco', name: 'Arroz blanco (cocido)', baseUnit: 'g', baseAmount: 100, kcal: 130, protein: 2.7, fat: 0.3, carbs: 28 },
    { id: 'arroz_integral', name: 'Arroz integral (cocido)', baseUnit: 'g', baseAmount: 100, kcal: 111, protein: 2.6, fat: 0.9, carbs: 23 },
    { id: 'avena', name: 'Avena en hojuelas', baseUnit: 'g', baseAmount: 100, kcal: 389, protein: 16.9, fat: 6.9, carbs: 66 },
    { id: 'lentejas', name: 'Lentejas (cocidas)', baseUnit: 'g', baseAmount: 100, kcal: 116, protein: 9, fat: 0.4, carbs: 20 },
    { id: 'garbanzos', name: 'Garbanzos (cocidos)', baseUnit: 'g', baseAmount: 100, kcal: 164, protein: 8.9, fat: 2.6, carbs: 27 },
    { id: 'pasta', name: 'Pasta (cocida)', baseUnit: 'g', baseAmount: 100, kcal: 131, protein: 5, fat: 1.1, carbs: 25 },
    { id: 'pan_integral', name: 'Pan integral', baseUnit: 'g', baseAmount: 100, kcal: 247, protein: 13, fat: 3.4, carbs: 41 },
    { id: 'quinoa', name: 'Quinoa (cocida)', baseUnit: 'g', baseAmount: 100, kcal: 120, protein: 4.4, fat: 1.9, carbs: 21.3 }
  ],
  carnes: [
    { id: 'pechuga_pollo', name: 'Pechuga de pollo (cocida)', baseUnit: 'g', baseAmount: 100, kcal: 165, protein: 31, fat: 3.6, carbs: 0 },
    { id: 'carne_res', name: 'Carne de res magra', baseUnit: 'g', baseAmount: 100, kcal: 250, protein: 26, fat: 15, carbs: 0 },
    { id: 'salmon', name: 'Filete de Salmón', baseUnit: 'g', baseAmount: 100, kcal: 208, protein: 20, fat: 13, carbs: 0 },
    { id: 'atun', name: 'Atún en agua (enlatado)', baseUnit: 'g', baseAmount: 100, kcal: 116, protein: 26, fat: 1, carbs: 0 },
    { id: 'huevo', name: 'Huevo entero', baseUnit: 'unidad', baseAmount: 1, kcal: 72, protein: 6.3, fat: 4.8, carbs: 0.4 },
    { id: 'tofu', name: 'Tofu firme', baseUnit: 'g', baseAmount: 100, kcal: 76, protein: 8, fat: 4.8, carbs: 1.9 }
  ],
  verduras: [
    { id: 'brocoli', name: 'Brócoli (cocido)', baseUnit: 'g', baseAmount: 100, kcal: 35, protein: 2.4, fat: 0.4, carbs: 7 },
    { id: 'espinacas', name: 'Espinaca fresca', baseUnit: 'g', baseAmount: 100, kcal: 23, protein: 2.9, fat: 0.4, carbs: 3.6 },
    { id: 'zanahoria', name: 'Zanahoria', baseUnit: 'g', baseAmount: 100, kcal: 41, protein: 0.9, fat: 0.2, carbs: 10 },
    { id: 'tomate', name: 'Tomate fresco', baseUnit: 'g', baseAmount: 100, kcal: 18, protein: 0.9, fat: 0.2, carbs: 3.9 },
    { id: 'aguacate', name: 'Aguacate', baseUnit: 'g', baseAmount: 100, kcal: 160, protein: 2, fat: 15, carbs: 9 }
  ],
  frutas: [
    { id: 'manzana', name: 'Manzana', baseUnit: 'unidad', baseAmount: 1, kcal: 95, protein: 0.5, fat: 0.3, carbs: 25 },
    { id: 'banano', name: 'Banano / Plátano', baseUnit: 'unidad', baseAmount: 1, kcal: 105, protein: 1.3, fat: 0.4, carbs: 27 },
    { id: 'fresa', name: 'Fresas', baseUnit: 'g', baseAmount: 100, kcal: 32, protein: 0.7, fat: 0.3, carbs: 7.7 },
    { id: 'naranja', name: 'Naranja', baseUnit: 'unidad', baseAmount: 1, kcal: 62, protein: 1.2, fat: 0.2, carbs: 15 }
  ],
  lacteos: [
    { id: 'leche_entera', name: 'Leche entera', baseUnit: 'ml', baseAmount: 100, kcal: 61, protein: 3.2, fat: 3.2, carbs: 4.8 },
    { id: 'leche_descremada', name: 'Leche descremada', baseUnit: 'ml', baseAmount: 100, kcal: 35, protein: 3.4, fat: 0.1, carbs: 5 },
    { id: 'yogur_griego', name: 'Yogur Griego Natural', baseUnit: 'g', baseAmount: 100, kcal: 59, protein: 10, fat: 0.4, carbs: 3.6 },
    { id: 'queso_fresco', name: 'Queso fresco', baseUnit: 'g', baseAmount: 100, kcal: 264, protein: 18, fat: 20, carbs: 3 }
  ],
  procesados: [
    { id: 'papas_fritas', name: 'Papas fritas', baseUnit: 'g', baseAmount: 100, kcal: 536, protein: 7, fat: 35, carbs: 53 },
    { id: 'chocolate_negro', name: 'Chocolate negro 70%', baseUnit: 'g', baseAmount: 100, kcal: 598, protein: 7.8, fat: 42, carbs: 46 },
    { id: 'frutos_secos', name: 'Frutos secos mixtos', baseUnit: 'g', baseAmount: 100, kcal: 607, protein: 20, fat: 54, carbs: 21 }
  ]
};

let planData = {
  lunes: {
    desayuno: [
      { id: '1', foodId: 'avena', name: 'Avena en hojuelas', portionStr: '50 g', qty: 50, unit: 'g', cat: 'granos', kcal: 195, fat: 3.5, protein: 8.5, carbs: 33 },
      { id: '2', foodId: 'banano', name: 'Banano / Plátano', portionStr: '1 unidad', qty: 1, unit: 'unidad', cat: 'frutas', kcal: 105, fat: 0.4, protein: 1.3, carbs: 27 }
    ],
    almuerzo: [
      { id: '3', foodId: 'pechuga_pollo', name: 'Pechuga de pollo (cocida)', portionStr: '200 g', qty: 200, unit: 'g', cat: 'carnes', kcal: 330, fat: 7.2, protein: 62, carbs: 0 },
      { id: '4', foodId: 'arroz_blanco', name: 'Arroz blanco (cocido)', portionStr: '150 g', qty: 150, unit: 'g', cat: 'granos', kcal: 195, fat: 0.5, protein: 4.1, carbs: 42 },
      { id: '5', foodId: 'brocoli', name: 'Brócoli (cocido)', portionStr: '100 g', qty: 100, unit: 'g', cat: 'verduras', kcal: 35, fat: 0.4, protein: 2.4, carbs: 7 }
    ],
    cena: [
      { id: '6', foodId: 'salmon', name: 'Filete de Salmón', portionStr: '150 g', qty: 150, unit: 'g', cat: 'carnes', kcal: 312, fat: 19.5, protein: 30, carbs: 0 }
    ]
  }
};

DAYS.forEach(d => {
  if (!planData[d]) planData[d] = {};
  MEALS.forEach(m => {
    if (!planData[d][m.id]) planData[d][m.id] = [];
  });
});

let activeTab = 'lunes';
let activeCategory = 'todas';
let editingTarget = null;
let editingItemIndex = null;

function getMealTotals(items, catFilter = 'todas') {
  let kcal = 0, fat = 0, protein = 0, carbs = 0, count = 0;
  items.forEach(i => {
    if (catFilter === 'todas' || i.cat === catFilter) {
      kcal += i.kcal || 0;
      fat += i.fat || 0;
      protein += i.protein || 0;
      carbs += i.carbs || 0;
      count++;
    }
  });
  return { kcal: Math.round(kcal), fat, protein, carbs, count };
}

function getDayTotals(day, catFilter = 'todas') {
  const meals = planData[day] || {};
  let kcal = 0, fat = 0, protein = 0, carbs = 0, count = 0;
  Object.values(meals).forEach(itemList => {
    const t = getMealTotals(itemList, catFilter);
    kcal += t.kcal;
    fat += t.fat;
    protein += t.protein;
    carbs += t.carbs;
    count += t.count;
  });
  return { kcal: Math.round(kcal), fat, protein, carbs, count };
}

function getWeekTotals(catFilter = 'todas') {
  let kcal = 0, fat = 0, protein = 0, carbs = 0, count = 0;
  DAYS.forEach(d => {
    const t = getDayTotals(d, catFilter);
    kcal += t.kcal;
    fat += t.fat;
    protein += t.protein;
    carbs += t.carbs;
    count += t.count;
  });
  return { kcal, fat, protein, carbs, count };
}

function calculateMacros(food, qty, unit) {
  if (!food || isNaN(qty) || qty <= 0) {
    return { kcal: 0, protein: 0, fat: 0, carbs: 0 };
  }
  let gramsOrMl = qty;
  if (unit === 'kg') gramsOrMl = qty * 1000;
  if (unit === 'l') gramsOrMl = qty * 1000;

  const multiplier = (food.baseUnit === 'g' || food.baseUnit === 'ml') 
    ? (gramsOrMl / food.baseAmount) 
    : (qty / food.baseAmount);

  return {
    kcal: Math.round(food.kcal * multiplier),
    protein: parseFloat((food.protein * multiplier).toFixed(1)),
    fat: parseFloat((food.fat * multiplier).toFixed(1)),
    carbs: parseFloat((food.carbs * multiplier).toFixed(1))
  };
}

function selectDay(dayKey) {
  activeTab = dayKey;
  switchTheme(DAY_THEMES[dayKey] || 'anxiety');
  render();
}

function renderNavs() {
  const daysNav = document.getElementById('daysNav');
  daysNav.innerHTML = '';

  DAYS.forEach(d => {
    const btn = document.createElement('button');
    btn.className = 'nav-item' + (activeTab === d ? ' active' : '');
    btn.textContent = DAY_NAMES[d];
    btn.onclick = () => selectDay(d);
    daysNav.appendChild(btn);
  });

  const weekBtn = document.createElement('button');
  weekBtn.className = 'nav-item' + (activeTab === 'semana' ? ' active' : '');
  weekBtn.textContent = 'Semana Completa';
  weekBtn.onclick = () => selectDay('semana');
  daysNav.appendChild(weekBtn);

  const catNav = document.getElementById('catNav');
  catNav.innerHTML = '';
  CATEGORIES.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'pill pill-cat' + (activeCategory === c.id ? ' active' : '');
    btn.textContent = c.label;
    btn.onclick = () => { activeCategory = c.id; render(); };
    catNav.appendChild(btn);
  });
}

function getNutritionTargets() {
  const weight = userProfile.weight > 0 ? userProfile.weight : 70;
  let minKcal, maxKcal, carbPctRange, fatPctRange;

  if (userProfile.goal === 'bajar') {
    // Objetivos para Déficit Calórico (Pérdida de peso)
    minKcal = Math.round(weight * 20);
    maxKcal = Math.round(weight * 25);
    carbPctRange = [35, 50];
    fatPctRange = [20, 30];
  } else if (userProfile.goal === 'subir') {
    // Objetivos para Superávit Calórico (Aumento de peso / masa)
    minKcal = Math.round(weight * 33);
    maxKcal = Math.round(weight * 40);
    carbPctRange = [50, 65];
    fatPctRange = [20, 35];
  } else {
    // Objetivos para Mantenimiento
    minKcal = Math.round(weight * 26);
    maxKcal = Math.round(weight * 32);
    carbPctRange = [45, 60];
    fatPctRange = [20, 35];
  }

  return { minKcal, maxKcal, carbPctRange, fatPctRange };
}

function evaluateNutrition(kcal, fat, carbs) {
  const t = getNutritionTargets();
  const issues = [];

  const goalText = userProfile.goal === 'bajar' ? 'tu objetivo de bajar peso' : (userProfile.goal === 'subir' ? 'tu objetivo de subir peso' : 'mantenimiento');

  if (kcal > t.maxKcal) {
    issues.push({ 
      level: 3, 
      icon: '🚨', 
      text: `exceso calórico (${Math.round(kcal)} kcal frente al máximo sugerido de ${t.maxKcal} kcal para ${goalText})` 
    });
  } else if (kcal > 0 && kcal < t.minKcal) {
    issues.push({ 
      level: 2, 
      icon: '💡', 
      text: `ingesta calórica por debajo del objetivo (${Math.round(kcal)} kcal; se recomiendan al menos ${t.minKcal} kcal para ${goalText})` 
    });
  }

  if (kcal > 0) {
    const carbPct = (carbs * 4 / kcal) * 100;
    const fatPct = (fat * 9 / kcal) * 100;
    const [carbMin, carbMax] = t.carbPctRange;
    const [fatMin, fatMax] = t.fatPctRange;

    if (carbPct > carbMax + 10) {
      issues.push({ level: 3, icon: '⚠️', text: `proporción de carbohidratos muy alta (${carbPct.toFixed(0)}% de tus calorías; ideal hasta ${carbMax}% para ${goalText})` });
    } else if (carbPct > carbMax) {
      issues.push({ level: 1, icon: '⚠️', text: `carbohidratos algo por encima de lo ideal (${carbPct.toFixed(0)}% de tus calorías; ideal hasta ${carbMax}% para ${goalText})` });
    }

    if (fatPct > fatMax + 10) {
      issues.push({ level: 3, icon: '⚠️', text: `proporción de grasas muy alta (${fatPct.toFixed(0)}% de tus calorías; ideal hasta ${fatMax}%)` });
    } else if (fatPct > fatMax) {
      issues.push({ level: 1, icon: '⚠️', text: `grasas algo por encima de lo ideal (${fatPct.toFixed(0)}% de tus calorías; ideal hasta ${fatMax}%)` });
    }
  }

  issues.sort((a, b) => b.level - a.level);
  return issues;
}

function getWeeklyNutritionTargets() {
  const t = getNutritionTargets();
  const days = DAYS.length;
  return {
    ...t,
    minWeekKcal: t.minKcal * days,
    maxWeekKcal: t.maxKcal * days
  };
}

function buildWarningFromIssues(issues, okMsg, targetLine, scopeLabel = 'del día') {
  const fullOkMsg = targetLine ? `${okMsg} ${targetLine}` : okMsg;

  if (issues.length === 0) {
    return { type: 'ok', icon: '✅', title: `Balance Óptimo ${scopeLabel}`, msg: fullOkMsg };
  }
  const top = issues[0];
  const type = top.level >= 3 ? 'danger' : 'warn';
  const title = top.level >= 3 ? `Ajusta tu alimentación ${scopeLabel}` : `Recomendación de Equilibrio ${scopeLabel}`;
  const detected = 'Se detectó ' + issues.map(i => i.text).join('; ') + '.';
  const msg = targetLine ? `${detected} ${targetLine}` : detected;
  return { type, icon: top.icon, title, msg };
}

function getWarning(dayTotals, dayLabel) {
  const { kcal, fat, count, carbs } = dayTotals;

  if (count === 0) {
    return { type: 'warn', icon: '⚠️', title: 'Sin registros', msg: 'No se encontraron alimentos en el menú actual con el filtro aplicado.' };
  }

  const t = getNutritionTargets();
  const issues = evaluateNutrition(kcal, fat, carbs);
  const goalNames = { bajar: 'bajar de peso', mantener: 'mantener peso', subir: 'subir de peso' };
  const perfilTxt = `tu peso de ${userProfile.weight} kg y tu objetivo de ${goalNames[userProfile.goal] || 'mantener peso'}`;
  const targetLine = `Para ${dayLabel || 'este día'}, según ${perfilTxt}, el objetivo es de ${t.minKcal}–${t.maxKcal} kcal.`;
  return buildWarningFromIssues(issues, `El aporte nutricional de ${dayLabel || 'este día'} está bien equilibrado para ${perfilTxt}.`, targetLine, 'del día');
}

function getWeeklyWarning(weekTotals) {
  if (!weekTotals.count) {
    return { type: 'warn', icon: '⚠️', title: 'Sin registros', msg: 'No se encontraron alimentos en el menú semanal con el filtro aplicado.' };
  }

  const days = DAYS.length;
  const t = getWeeklyNutritionTargets();
  const issues = evaluateNutrition(weekTotals.kcal / days, weekTotals.fat / days, weekTotals.carbs / days);
  const goalNames = { bajar: 'bajar de peso', mantener: 'mantener peso', subir: 'subir de peso' };
  const perfilTxt = `tu peso de ${userProfile.weight} kg y tu objetivo de ${goalNames[userProfile.goal] || 'mantener peso'}`;
  const targetLine = `Según ${perfilTxt}, se recomienda consumir entre ${t.minKcal} y ${t.maxKcal} kcal al día (por ejemplo el lunes), y entre ${t.minWeekKcal} y ${t.maxWeekKcal} kcal en total durante la semana.`;
  return buildWarningFromIssues(issues, `El promedio diario de la semana está bien equilibrado para ${perfilTxt}.`, targetLine, 'de la semana');
}

function renderMain() {
  const container = document.getElementById('mainContainer');
  container.innerHTML = '';

  if (activeTab === 'semana') {
    renderWeekView(container);
  } else {
    renderDayView(container, activeTab);
  }
}

function renderDayView(container, day) {
  const totals = getDayTotals(day, activeCategory);
  const warn = getWarning(totals, DAY_NAMES[day]);

  const alertDiv = document.createElement('div');
  alertDiv.className = `alert-box ${warn.type}`;
  alertDiv.innerHTML = `
    <div class="alert-icon">${warn.icon}</div>
    <div class="alert-content">
      <h4>${warn.title} ${activeCategory !== 'todas' ? `(Filtro: ${activeCategory.toUpperCase()})` : ''}</h4>
      <p>${warn.msg}</p>
    </div>
  `;
  container.appendChild(alertDiv);

  const grid = document.createElement('div');
  grid.className = 'day-grid';

  MEALS.forEach(m => {
    const items = planData[day][m.id] || [];
    const filteredItems = items.filter(i => activeCategory === 'todas' || i.cat === activeCategory);
    const mTotals = getMealTotals(items, activeCategory);

    const card = document.createElement('div');
    card.className = 'meal-card';

    let itemsHTML = '';
    if (filteredItems.length === 0) {
      itemsHTML = `<div class="meal-empty">No hay alimentos registrados</div>`;
    } else {
      itemsHTML = filteredItems.map(item => `
        <div class="food-item">
          <div class="food-info">
            <span class="food-name">${escapeHtml(item.name)}</span>
            <span class="food-portion">Porción: ${escapeHtml(item.portionStr)}</span>
            <span class="tag-cat tag-${item.cat}">${item.cat}</span>
          </div>
          <div class="food-macros">
            <div><b>${item.kcal}</b> kcal</div>
            <div>G: ${item.fat}g | P: ${item.protein}g | C: ${item.carbs}g</div>
          </div>
        </div>
      `).join('');
    }

    card.innerHTML = `
      <div>
        <div class="meal-header">
          <span class="meal-type">${m.label}</span>
          <button class="btn-edit" onclick="openModal('${day}', '${m.id}')">+ Editar / Añadir</button>
        </div>
        <div class="food-list">${itemsHTML}</div>
      </div>
      <div class="meal-stats">
        <div><span class="mval">${mTotals.kcal}</span><span class="mlbl">kcal</span></div>
        <div><span class="mval">${mTotals.fat.toFixed(1)}g</span><span class="mlbl">Grasas</span></div>
        <div><span class="mval">${mTotals.protein.toFixed(1)}g</span><span class="mlbl">Prot</span></div>
        <div><span class="mval">${mTotals.carbs.toFixed(1)}g</span><span class="mlbl">Carb</span></div>
      </div>
    `;
    grid.appendChild(card);
  });
  container.appendChild(grid);

  const sumDiv = document.createElement('div');
  sumDiv.className = 'summary-card';
  sumDiv.innerHTML = `
    <div class="sum-item"><div class="num">${totals.kcal}</div><div class="label">Kcal Totales</div></div>
    <div class="sum-item"><div class="num">${totals.carbs.toFixed(1)}g</div><div class="label">Carbohidratos</div></div>
    <div class="sum-item"><div class="num">${totals.protein.toFixed(1)}g</div><div class="label">Proteína Total</div></div>
    <div class="sum-item"><div class="num">${totals.fat.toFixed(1)}g</div><div class="label">Grasa Total</div></div>
  `;
  container.appendChild(sumDiv);
}

function renderWeekView(container) {
  const wTotals = getWeekTotals(activeCategory);
  const avgKcal = Math.round(wTotals.kcal / 7);
  const warn = getWeeklyWarning(wTotals);

  const alertDiv = document.createElement('div');
  alertDiv.className = `alert-box ${warn.type}`;
  alertDiv.innerHTML = `
    <div class="alert-icon">${warn.icon}</div>
    <div class="alert-content">
      <h4>${warn.title} ${activeCategory !== 'todas' ? `(Filtro: ${activeCategory.toUpperCase()})` : ''}</h4>
      <p>${warn.msg} Promedio diario aproximado: ${avgKcal} kcal.</p>
    </div>
  `;
  container.appendChild(alertDiv);

  const grid = document.createElement('div');
  grid.className = 'week-grid';

  DAYS.forEach(d => {
    const t = getDayTotals(d, activeCategory);
    const card = document.createElement('div');
    card.className = 'week-day-card';
    card.onclick = () => selectDay(d);

    const itemsDes = (planData[d].desayuno || []).filter(i => activeCategory === 'todas' || i.cat === activeCategory);
    const itemsAlm = (planData[d].almuerzo || []).filter(i => activeCategory === 'todas' || i.cat === activeCategory);
    const itemsCen = (planData[d].cena || []).filter(i => activeCategory === 'todas' || i.cat === activeCategory);

    card.innerHTML = `
      <div class="week-day-title">
        <span>${DAY_NAMES[d]}</span>
        <span style="font-size:.8rem; color:var(--text-dim);">${t.kcal} kcal</span>
      </div>
      <div style="font-size:.78rem; color:var(--text-dim); line-height:1.5;">
        <p>${itemsDes.length} alimento(s)</p>
        <p>${itemsAlm.length} alimento(s)</p>
        <p>${itemsCen.length} alimento(s)</p>
      </div>
      <div style="margin-top:.8rem; font-size:.72rem; color:var(--text-faint); text-align:right;">
        G: ${t.fat.toFixed(1)}g | P: ${t.protein.toFixed(1)}g | C: ${t.carbs.toFixed(1)}g
      </div>
    `;
    grid.appendChild(card);
  });
  container.appendChild(grid);
}

function renderStats() {
  const wTotals = getWeekTotals(activeCategory);
  const avg = Math.round(wTotals.kcal / 7);

  document.getElementById('statAvgKcal').textContent = `${avg} kcal`;
  document.getElementById('statTotalFat').textContent = `${wTotals.fat.toFixed(1)} g`;

  const statusElem = document.getElementById('statStatus');

  if (!wTotals.count) {
    statusElem.textContent = 'Sin datos';
    statusElem.style.color = 'var(--text-dim)';
    return;
  }

  const days = DAYS.length;
  const issues = evaluateNutrition(wTotals.kcal / days, wTotals.fat / days, wTotals.carbs / days);

  if (issues.length === 0) {
    statusElem.textContent = '✅ Equilibrado';
    statusElem.style.color = 'var(--ok)';
  } else if (issues[0].level >= 3) {
    statusElem.textContent = `${issues[0].icon} Fuera de rango`;
    statusElem.style.color = 'var(--danger)';
  } else {
    statusElem.textContent = `${issues[0].icon} Cerca del límite`;
    statusElem.style.color = 'var(--warn)';
  }
}

function render() {
  renderNavs();
  renderMain();
  renderStats();
}

const profileModalOverlay = document.getElementById('profileModalOverlay');
const userProfileBtn = document.getElementById('userProfileBtn');
const btnCloseProfile = document.getElementById('btnCloseProfile');
const btnSaveProfile = document.getElementById('btnSaveProfile');

userProfileBtn.onclick = () => {
  document.getElementById('userWeight').value = userProfile.weight;
  document.getElementById('userGoal').value = userProfile.goal || 'mantener';
  profileModalOverlay.classList.add('show');
};

const closeProfileModal = () => profileModalOverlay.classList.remove('show');
btnCloseProfile.onclick = closeProfileModal;

btnSaveProfile.onclick = () => {
  userProfile.weight = parseFloat(document.getElementById('userWeight').value) || 70;
  userProfile.goal = document.getElementById('userGoal').value;
  closeProfileModal();
  render();
};

const overlay = document.getElementById('formOverlay');
const addFoodForm = document.getElementById('addFoodForm');
const catSelect = document.getElementById('f_cat_select');
const itemSelect = document.getElementById('f_item_select');
const unitSelect = document.getElementById('f_unit_select');
const qtyInput = document.getElementById('f_qty');

function initFormDropdowns() {
  catSelect.innerHTML = '';
  CATEGORIES.filter(c => c.id !== 'todas').forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.label;
    catSelect.appendChild(opt);
  });

  catSelect.onchange = handleCategoryChange;
  itemSelect.onchange = handleFoodChange;
  unitSelect.onchange = updateLivePreview;
  qtyInput.oninput = updateLivePreview;

  handleCategoryChange();
}

function handleCategoryChange() {
  const selectedCat = catSelect.value;
  const foodList = FOOD_DATABASE[selectedCat] || [];

  itemSelect.innerHTML = '';
  foodList.forEach(food => {
    const opt = document.createElement('option');
    opt.value = food.id;
    opt.textContent = food.name;
    itemSelect.appendChild(opt);
  });

  handleFoodChange();
}

function handleFoodChange() {
  const selectedCat = catSelect.value;
  const foodId = itemSelect.value;
  const food = (FOOD_DATABASE[selectedCat] || []).find(f => f.id === foodId);

  unitSelect.innerHTML = '';
  if (!food) return;

  if (food.baseUnit === 'g') {
    unitSelect.innerHTML = `<option value="g">Gramos (g)</option><option value="kg">Kilogramos (kg)</option>`;
    qtyInput.value = '100';
  } else if (food.baseUnit === 'ml') {
    unitSelect.innerHTML = `<option value="ml">Mililitros (ml)</option><option value="l">Litros (L)</option>`;
    qtyInput.value = '200';
  } else if (food.baseUnit === 'unidad') {
    unitSelect.innerHTML = `<option value="unidad">Unidades / Piezas</option>`;
    qtyInput.value = '1';
  }

  updateLivePreview();
}

function updateLivePreview() {
  const selectedCat = catSelect.value;
  const foodId = itemSelect.value;
  const food = (FOOD_DATABASE[selectedCat] || []).find(f => f.id === foodId);
  const qty = parseFloat(qtyInput.value) || 0;
  const unit = unitSelect.value;

  const macros = calculateMacros(food, qty, unit);

  document.getElementById('previewKcal').textContent = macros.kcal;
  document.getElementById('previewCarbs').textContent = `${macros.carbs}g`;
  document.getElementById('previewProtein').textContent = `${macros.protein}g`;
  document.getElementById('previewFat').textContent = `${macros.fat}g`;
}

function openModal(day, meal) {
  editingTarget = { day, meal };
  const mealObj = MEALS.find(m => m.id === meal);
  document.getElementById('modalTitle').textContent = `${DAY_NAMES[day]} · ${mealObj.label}`;
  
  initFormDropdowns();
  resetForm();
  renderModalItems();
  overlay.classList.add('show');
}

function closeModal() {
  overlay.classList.remove('show');
  editingTarget = null;
  resetForm();
  render();
}

function renderModalItems() {
  if (!editingTarget) return;
  const { day, meal } = editingTarget;
  const items = planData[day][meal] || [];
  const listContainer = document.getElementById('modalItemList');

  if (items.length === 0) {
    listContainer.innerHTML = `<div class="meal-empty">Sin datos</div>`;
    return;
  }

  listContainer.innerHTML = items.map((item, index) => `
    <div class="modal-item-row">
      <div>
        <div style="font-weight:600; font-size:.85rem;">${escapeHtml(item.name)} (${item.portionStr})</div>
        <div style="font-size:.7rem; color:var(--text-dim);">
          <span class="tag-cat tag-${item.cat}">${item.cat}</span> · ${item.kcal} kcal (G: ${item.fat}g, P: ${item.protein}g, C: ${item.carbs}g)
        </div>
      </div>
      <div style="display:flex; gap:0.2rem; align-items:center;">
        <button class="btn-item-edit" onclick="editFoodItem(${index})" title="Editar alimento">✏️</button>
        <button class="btn-del" onclick="deleteFoodItem(${index})" title="Eliminar alimento">✕</button>
      </div>
    </div>
  `).join('');
}

function editFoodItem(index) {
  if (!editingTarget) return;
  const { day, meal } = editingTarget;
  const item = planData[day][meal][index];
  if (!item) return;

  editingItemIndex = index;

  document.getElementById('formSectionTitle').textContent = 'Modificar Alimento';
  document.getElementById('submitFoodBtn').textContent = 'Guardar Cambios';
  document.getElementById('cancelEditBtn').style.display = 'inline-block';

  catSelect.value = item.cat;
  handleCategoryChange();

  let targetFoodId = item.foodId;
  if (!targetFoodId) {
    const list = FOOD_DATABASE[item.cat] || [];
    const found = list.find(f => f.name === item.name);
    if (found) targetFoodId = found.id;
  }

  if (targetFoodId) {
    itemSelect.value = targetFoodId;
    handleFoodChange();
  }

  if (item.qty && item.unit) {
    unitSelect.value = item.unit;
    qtyInput.value = item.qty;
  }

  updateLivePreview();
}

function resetForm() {
  editingItemIndex = null;
  document.getElementById('formSectionTitle').textContent = '+ Agregar Nuevo Alimento';
  document.getElementById('submitFoodBtn').textContent = '+ Añadir a la comida';
  document.getElementById('cancelEditBtn').style.display = 'none';

  if (catSelect.options.length > 0) {
    catSelect.selectedIndex = 0;
    handleCategoryChange();
  }
}

function deleteFoodItem(index) {
  if (!editingTarget) return;
  const { day, meal } = editingTarget;
  planData[day][meal].splice(index, 1);
  if (editingItemIndex === index) resetForm();
  renderModalItems();
}

addFoodForm.onsubmit = (e) => {
  e.preventDefault();
  if (!editingTarget) return;

  const selectedCat = catSelect.value;
  const foodId = itemSelect.value;
  const food = (FOOD_DATABASE[selectedCat] || []).find(f => f.id === foodId);
  const qty = parseFloat(qtyInput.value) || 0;
  const unit = unitSelect.value;

  if (!food || qty <= 0) return;

  const macros = calculateMacros(food, qty, unit);
  const { day, meal } = editingTarget;

  const itemObj = {
    id: editingItemIndex !== null ? planData[day][meal][editingItemIndex].id : Date.now().toString(),
    foodId: foodId,
    name: food.name,
    cat: selectedCat,
    qty: qty,
    unit: unit,
    portionStr: `${qty} ${unit}`,
    kcal: macros.kcal,
    fat: macros.fat,
    protein: macros.protein,
    carbs: macros.carbs
  };

  if (editingItemIndex !== null) {
    planData[day][meal][editingItemIndex] = itemObj;
  } else {
    planData[day][meal].push(itemObj);
  }

  resetForm();
  renderModalItems();
};

document.getElementById('btnDone').onclick = closeModal;

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

document.getElementById('btnExport').onclick = () => {
  const exportPayload = { userProfile, planData };
  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'plan-nutricional.json';
  a.click();
  URL.revokeObjectURL(url);
};

document.getElementById('btnImportTrigger').onclick = () => document.getElementById('fileImport').click();
document.getElementById('fileImport').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = evt => {
    try {
      const parsed = JSON.parse(evt.target.result);
      if (parsed.planData) {
        planData = parsed.planData;
        if (parsed.userProfile) userProfile = parsed.userProfile;
      } else {
        planData = parsed;
      }
      render();
    } catch (err) {
      alert('Archivo JSON no válido.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  selectDay('lunes');
});