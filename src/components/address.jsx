/* ===========================
    CONTENIDO GENERAL
=========================== */

.content {
  padding-top: 25px;
  font-size: 18px;
}

.a-sep {
  text-decoration: underline;
  color: #611232;
  cursor: pointer;
}

.a-sep:hover {
  color: #D3C09B;
}

.ul-sep,
.ul-sep2 {
  list-style-type: disc;
  margin-left: 25px;
}

.ul-sep li,
.ul-sep2 li {
  margin-bottom: 20px;
  word-break: break-word;
  overflow-wrap: break-word;
}

.title-sep {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.subtitle-sep {
  font-weight: bold;
}

/* ===========================
    SECCIÓN PRESENCIAL
=========================== */

.presencial {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.addresses {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.addressData {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px; 
}

/* ===========================
    BLOQUES CON ICONOS
=========================== */

.data-container {
  display: flex;
  flex-direction: row; 
  align-items: flex-start;
  gap: 10px;
}

/* Nuevo: aseguramos que los íconos no se encogen */
.data-container .icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  object-fit: contain;
}

/* Nuevo: envoltorio del texto para forzar buen ajuste en móvil */
.data-container .text {
  flex: 1 1 auto;
  overflow-wrap: break-word;
  word-break: break-word;
}
