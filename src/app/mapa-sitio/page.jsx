"use client";
import React from "react";
import { useState, useEffect } from "react";
import PagSec from "@/components/PlantillaPagMS";
import Link from "next/link";

export default function MapaDelSitio() {
    const [enlacesL, setEnlacesL] = useState([]);

    useEffect(() => {
        const fetchEnlacesL = async () => {
        const resPineados = await fetch(
            `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
        );
        const { data: enlacesPineados } = await resPineados.json();

        let enlaces = enlacesPineados;

        if (enlacesPineados.length < 3) {
            const resNoPineados = await fetch(
            `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
            );
            const { data: enlacesNoPineados } = await resNoPineados.json();

            enlaces = [
            ...enlacesPineados,
            ...enlacesNoPineados.slice(0, 3 - enlacesPineados.length),
            ];
        }

        const enlacesLData = enlaces.map((item) => ({
            title: item.attributes.Titulo,
            imageSrc: item.attributes?.Imagen.data[0]?.attributes?.url,
            buttonText: "Ir al sitio",
            link: item.attributes.URL_Externo
            ? item.attributes.URL_Externo
            : `/enlaces-de-interes/${item.attributes.slug}`,
        }));
        setEnlacesL(enlacesLData);
        };

        fetchEnlacesL();
    }, []);

    return (
        <div>
            <PagSec Enlaces={enlacesL} Titulo="Mapa del sitio">
                <div className="space-y-6 text-[#333] text-base sm:text-[18px]">
                    {/* Sección: Inicio */}
                    <div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Inicio</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><Link href="/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Inicio</Link></li>
                        <li><Link href="https://www.gob.mx/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer
                            hover:underline">Búsqueda</Link></li>
                    </ul>
                    </div>

                    {/* Sección: Oferta Educativa */}
                    <div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Oferta Educativa</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><Link href="/oferta-educativa/que-modalidad-elijo" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer
                            hover:underline">¿Qué modalidad elijo?</Link></li>
                        <li><Link href="/oferta-educativa/presencial" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer
                            hover:underline">Presencial</Link></li>
                        <li><Link href="/oferta-educativa/enlinea" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">En línea (AprendeINEA)</Link></li>
                        <li><Link href="/oferta-educativa/examen-unico" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Exámen único</Link></li>
                        <li><Link href="/oferta-educativa/examen-diagnostico" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Exámen diagnóstico</Link></li>
                    </ul>
                    </div>

                    {/* Sección: Servicios */}
                    <div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Servicios</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><Link href="/servicios/servedu" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Servicios educativos</Link></li>
                        <li><Link href="https://certificacion.inea.gob.mx/DescCertificado.aspx" 
                            className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Descarga tu certificado</Link></li>
                        <li><Link href="/servicios/solicitud-duplicados" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Solicitud duplicados</Link></li>
                        <li><Link href="https://www.gob.mx/curp/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Consulta tu CURP</Link></li>
                        <li><Link href="/servicios/constancia-comipems" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Solicita constancia COMIPEMS</Link></li>
                        <li><Link href="/servicios/reposicion-certificados" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Reposición de certificados SEP</Link></li>
                        <li><Link href="/servicios/descargar-modulos" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Descarga material de estudio</Link></li>
                        <li><Link href="/servicios/revalidacion-extranjeros" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Revalidación a extranjeros</Link></li>
                        <li><Link href="/servicios/te-contactamos" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Te contactamos</Link></li>
                    </ul>
                    </div>

                    {/* Sección: Materiales */}
                    <div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Materiales</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><Link href="/materiales" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Consulta aquí tus materiales</Link></li>
                    </ul>
                    </div>

                    {/* Sección: Ubicación */}
                    <div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Ubicación</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><Link href="/ubicacion" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Conoce nuestras ubicaciones</Link></li>
                    </ul>
                    </div>

                    {/* Sección: Control Escolar */}
                    <div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Control Escolar</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><Link href="http://www.inea.gob.mx/servicios_en_linea/Consulta_avance_academico.html" 
                            className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">Consulta tu avance académico</Link></li>
                        <li><Link href="http://siga.inea.gob.mx:8080/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">SIGA PEC</Link></li>
                        <li><Link href="http://siga.inea.gob.mx/figuras/Account/Login?ReturnUrl=%2Ffiguras%2F" 
                            className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">SIGA FIGURAS</Link></li>
                        <li><Link href="http://sael.inea.gob.mx/Login.aspx?ReturnUrl=/&AspxAutoDetectCookieSupport=1" 
                            className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">SAEL</Link></li>
                        <li><Link href="/planeacion" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Departamento de planeación</Link></li>
                    </ul>
                    </div>

                {/* Sección: INTRANET */}
                    <div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">INTRANET</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><Link href="http://cdmx.inea.gob.mx/CATN2/login.asp" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer
                            hover:underline">Mesa de servicios</Link></li>
                        <li><Link href="http://cdmx.inea.gob.mx/gestion/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer
                            hover:underline">Sistema de gestión</Link></li>
                        <li><Link href="http://cdmx.inea.gob.mx/oficios/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Sistema de oficios</Link></li>
                        <li><Link href="http://cdmx.inea.gob.mx/SIMA/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">SIMA</Link></li>
                        <li><Link href="http://sibiplac.inea.gob.mx/Sibiplac/Login.aspx?ReturnUrl=%2fSibiplac%2fReportes.aspx" 
                            className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">SIBIPLAC</Link></li>
                        <li><Link href="http://plazas.conevyt.org.mx:8080/plazas/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">SINAPLAC</Link></li>
                        <li><Link href="http://cdmx.inea.gob.mx/comipems/login.asp" className="text-[#611232] hover:text-[#D3C09B] cursor.pointer 
                            hover:underline">Constancias COMIPEMS</Link></li>
                        <li><Link href="http://df.sasa.inea.gob.mx/INEAGUI/guiLogin.aspx?ReturnUrl=%2fINEAGUI%2fdefault.aspx" 
                            className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">SASA</Link></li>
                        <li><Link href="http://satic.inea.gob.mx/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            SATIC</Link></li>
                        <li><Link href="https://login.microsoftonline.com/login.srf?wa=wsignin1.0&rpsnv=4&ct=1420848406&rver=6.4.6456.0&wp=MCMBI&wreply=
                            https://portal.office.com/landing.aspx?target=%2fdefault.aspx&lc=2058&id=501392&sso_reload=true" 
                            className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">Correo Institucional</Link></li>
                        <li><Link href="/INTRANET/inicio-sesion" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Inicia sesión aquí</Link></li>
                    </ul>
                    </div>
                    
                    {/* Sección: Servicio Social */}
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-2">Servicio Social</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li><Link href="/servicio-social" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Conoce aqui como realizarlo en el INEA CDMX</Link></li>
                        </ul>
                    </div>

                    {/* Sección: Enlaces */}
                    <div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Enlaces-Sitio</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><Link href="https://historico.datos.gob.mx/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Trámites y servicios (Gobierno)</Link></li>
                        <li><Link href="/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Conoce sobre el INEA</Link></li>
                        <li><Link href="/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Avisos de privacidad</Link></li>
                        <li><Link href="/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Comité de ética</Link></li>
                        <li><Link href="https://www.plataformadetransparencia.org.mx/Inicio" 
                            className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Transparencia (página oficial)</Link></li>
                        <li><Link href="/glosario" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Glosario</Link></li>
                        <li><Link href="https://www.gob.mx/inea/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer 
                            hover:underline">Página oficial INEA Nacional</Link></li>
                        <li><Link href="https://www.gob.mx" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Página oficial del Gobierno de México</Link></li>
                        <li><Link href="/" className="text-[#611232] hover:text-[#D3C09B] cursor-pointer hover:underline">
                            Créditos</Link></li>
                    </ul>
                    </div>
            </div>
        </PagSec>
    </div>
    );
}
