import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { renderToBuffer } from '@react-pdf/renderer';
import React from 'react';
import { EvaluacionPDF } from '@/lib/pdf-template';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'comercial@humania.com.co';
  const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@humania.com.co';
  try {
    const { empresa, respuestas, puntaje, nivel, evaluacionId } = await req.json();

    const nivelEmoji = nivel === 'CRÍTICO' ? '🔴' : nivel === 'MODERADO' ? '🟡' : '🟢';
    const nivelColor = nivel === 'CRÍTICO' ? '#f87171' : nivel === 'MODERADO' ? '#facc15' : '#4ade80';
    const nivelAccion =
      nivel === 'CRÍTICO'
        ? 'Debes realizar un Plan de Mejoramiento de inmediato y ponerlo a disposición del Ministerio del Trabajo.'
        : nivel === 'MODERADO'
        ? 'Elabora un Plan de Mejoramiento y repórtalo a tu ARL en máximo 6 meses.'
        : 'Mantén las evidencias y mejoras en tu Plan Anual de Trabajo. ¡Excelente trabajo!';

    const fecha = new Date().toLocaleDateString('es-CO', {
      day: '2-digit', month: 'long', year: 'numeric',
    });

    // ── Generar PDF ─────────────────────────────────────────────────────────
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pdfBuffer = await (renderToBuffer as any)(
      React.createElement(EvaluacionPDF, { empresa, respuestas, puntaje, nivel, fecha, evaluacionId })
    );
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');
    const pdfFilename = `HumanIA-SG-SST-${empresa.nit || 'evaluacion'}.pdf`;

    // ── HTML del correo ──────────────────────────────────────────────────────
    const nivelBg = nivel === 'CRÍTICO' ? '#3b0a0a' : nivel === 'MODERADO' ? '#2d1f00' : '#052e16';
    const nivelBorder = nivel === 'CRÍTICO' ? '#7f1d1d' : nivel === 'MODERADO' ? '#713f12' : '#14532d';

    const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark">
</head>
<body style="margin:0;padding:0;background-color:#0f172a;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f172a;">
    <tr><td align="center" style="padding:32px 16px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

        <!-- Logo -->
        <tr><td style="padding-bottom:28px;">
          <span style="font-size:24px;font-weight:800;color:#ffffff;">Human<span style="color:#f97316;">IA</span></span><br>
          <span style="font-size:11px;color:#475569;">Consultoría en SST · Colombia</span>
        </td></tr>

        <!-- Título -->
        <tr><td style="padding-bottom:24px;">
          <p style="margin:0 0 6px;font-size:20px;font-weight:700;color:#ffffff;">Tu Autoevaluación SG-SST está lista</p>
          <p style="margin:0;font-size:13px;color:#94a3b8;">Resolución 0312 de 2019 · ${fecha}</p>
        </td></tr>

        <!-- Empresa -->
        <tr><td style="background-color:#1e293b;border:1px solid #334155;border-radius:12px;padding:18px 20px;margin-bottom:20px;">
          <p style="margin:0 0 6px;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">EMPRESA EVALUADA</p>
          <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#ffffff;">${empresa.nombre}</p>
          <p style="margin:0;font-size:12px;color:#64748b;">NIT: ${empresa.nit} &nbsp;·&nbsp; Sector: ${empresa.sector}</p>
        </td></tr>

        <tr><td style="padding:12px 0;"></td></tr>

        <!-- Puntaje -->
        <tr><td align="center" style="background-color:${nivelBg};border:1px solid ${nivelBorder};border-radius:12px;padding:24px 20px;">
          <p style="margin:0 0 8px;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">PUNTAJE OBTENIDO</p>
          <p style="margin:0;font-size:64px;font-weight:900;color:${nivelColor};line-height:1;">${puntaje.toFixed(1)}<span style="font-size:24px;color:#475569;font-weight:400;"> / 100</span></p>
          <p style="margin:12px 0 0;display:inline-block;padding:6px 20px;border-radius:999px;background-color:${nivelBg};border:1px solid ${nivelBorder};color:${nivelColor};font-weight:700;font-size:14px;">${nivelEmoji} ${nivel}</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
            <tr>
              <td style="background-color:#1e293b;border-radius:4px;height:8px;padding:0;">
                <table width="${Math.round(puntaje)}%" cellpadding="0" cellspacing="0">
                  <tr><td style="background-color:${nivelColor};border-radius:4px;height:8px;font-size:0;">&nbsp;</td></tr>
                </table>
              </td>
            </tr>
          </table>
        </td></tr>

        <tr><td style="padding:12px 0;"></td></tr>

        <!-- Acción requerida -->
        <tr><td style="background-color:#1e1b4b;border:1px solid #3730a3;border-radius:12px;padding:16px 18px;">
          <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#a5b4fc;">¿Qué debes hacer?</p>
          <p style="margin:0;font-size:13px;color:#c7d2fe;line-height:1.6;">${nivelAccion}</p>
        </td></tr>

        <tr><td style="padding:12px 0;"></td></tr>

        <!-- Descripción PDF -->
        <tr><td>
          <p style="margin:0;font-size:13px;color:#64748b;line-height:1.7;">
            Adjunto encontrarás el <strong style="color:#94a3b8;">informe completo en PDF</strong> con tu resultado detallado, el análisis por ciclo PHVA y el Plan de Mejoramiento.
          </p>
        </td></tr>

        <tr><td style="padding:20px 0;">
          <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://humania.com.co'}/autoevaluacion/resultado/${evaluacionId}"
             style="display:inline-block;background-color:#f97316;color:#ffffff;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;">
            Ver informe en línea →
          </a>
        </td></tr>

        <!-- Apoyo -->
        <tr><td style="background-color:#1e293b;border:1px solid #334155;border-radius:12px;padding:16px 18px;">
          <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:#94a3b8;">¿Necesitas apoyo?</p>
          <p style="margin:0 0 10px;font-size:12px;color:#64748b;line-height:1.5;">Nuestros expertos en SST te acompañan en el Plan de Mejoramiento y la implementación del SG-SST.</p>
          <a href="https://wa.me/573102365931" style="font-size:13px;color:#4ade80;text-decoration:none;">💬 Escribir por WhatsApp</a>
        </td></tr>

        <tr><td style="padding:24px 0 0;">
          <p style="margin:0;font-size:11px;color:#334155;line-height:1.7;">
            HumanIA · Consultoría en SST · Bogotá, Colombia<br>
            comercial@humania.com.co · +57 310 236 5931<br>
            Lunes a viernes, 8:00 AM – 5:00 PM
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    // ── Enviar correo a la empresa + admin ──────────────────────────────────
    const recipients = [ADMIN_EMAIL];
    if (empresa.email) recipients.push(empresa.email);

    try {
      await resend.emails.send({
        from: `HumanIA SST <${FROM_EMAIL}>`,
        to: recipients,
        subject: `Tu Autoevaluación SG-SST: ${puntaje.toFixed(1)}% – Nivel ${nivel} ${nivelEmoji}`,
        html,
        attachments: [{ filename: pdfFilename, content: pdfBase64 }],
      });
    } catch (emailErr) {
      console.error('Resend error:', emailErr);
      // Don't fail — data is already saved in Firestore
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Email/PDF error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
