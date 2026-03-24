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
    const html = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:sans-serif;background:#0f172a;color:#e2e8f0;padding:0;margin:0;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
    <div style="margin-bottom:28px;">
      <span style="font-size:22px;font-weight:800;color:#fff;">Human<span style="color:#f97316;">IA</span></span>
      <p style="font-size:11px;color:#475569;margin:4px 0 0;">Consultoría en SST · Sistemas de Gestión ISO · Colombia</p>
    </div>

    <h1 style="font-size:20px;font-weight:700;color:#fff;margin:0 0 6px;">
      Tu Autoevaluación SG-SST está lista
    </h1>
    <p style="color:#94a3b8;font-size:13px;margin:0 0 28px;">
      Resolución 0312 de 2019 · Estándares Mínimos · ${fecha}
    </p>

    <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:18px 20px;margin-bottom:20px;">
      <p style="color:#94a3b8;font-size:11px;margin:0 0 6px;">EMPRESA EVALUADA</p>
      <p style="color:#fff;font-weight:700;font-size:15px;margin:0 0 3px;">${empresa.nombre}</p>
      <p style="color:#64748b;font-size:12px;margin:0;">NIT: ${empresa.nit} · Sector: ${empresa.sector}</p>
    </div>

    <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:20px;margin-bottom:20px;text-align:center;">
      <p style="color:#94a3b8;font-size:11px;margin:0 0 10px;">PUNTAJE OBTENIDO</p>
      <span style="font-size:60px;font-weight:900;color:${nivelColor};line-height:1;">${puntaje.toFixed(1)}</span>
      <span style="font-size:22px;color:#475569;"> / 100</span>
      <div style="margin:14px 0 0;">
        <span style="display:inline-block;padding:6px 18px;border-radius:999px;background:${nivelColor}22;color:${nivelColor};font-weight:700;font-size:13px;border:1px solid ${nivelColor}44;">
          ${nivelEmoji} ${nivel}
        </span>
      </div>
      <div style="height:6px;background:rgba(255,255,255,0.08);border-radius:3px;margin:16px 0 4px;overflow:hidden;">
        <div style="height:6px;width:${puntaje}%;background:${nivelColor};border-radius:3px;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:10px;color:#475569;">
        <span>0%</span><span style="color:#f87171;">60% Crítico</span><span style="color:#facc15;">85% Moderado</span><span style="color:#4ade80;">100%</span>
      </div>
    </div>

    <div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:12px;padding:14px 16px;margin-bottom:20px;">
      <p style="color:#93c5fd;font-weight:600;font-size:12px;margin:0 0 6px;">¿Qué debes hacer?</p>
      <p style="color:#bfdbfe;font-size:12px;margin:0;line-height:1.6;">${nivelAccion}</p>
    </div>

    <p style="color:#64748b;font-size:12px;margin-bottom:20px;line-height:1.6;">
      Adjunto encontrarás el <strong style="color:#94a3b8;">informe completo en PDF</strong> con tu resultado detallado,
      el análisis por ciclo PHVA y el Plan de Mejoramiento con los ítems que requieren acción.
    </p>

    <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://humania.com.co'}/autoevaluacion/resultado/${evaluacionId}"
       style="display:inline-block;background:#f97316;color:#fff;padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:700;font-size:13px;margin-bottom:28px;">
      Ver informe en línea →
    </a>

    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px;margin-bottom:24px;">
      <p style="color:#94a3b8;font-size:12px;font-weight:600;margin:0 0 6px;">¿Necesitas apoyo?</p>
      <p style="color:#64748b;font-size:11px;margin:0 0 10px;line-height:1.5;">
        Nuestros expertos en SST te acompañan en el Plan de Mejoramiento y la implementación completa del SG-SST.
      </p>
      <a href="https://wa.me/573102365931" style="color:#4ade80;font-size:11px;text-decoration:none;">
        💬 Escribir por WhatsApp
      </a>
    </div>

    <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:0 0 20px;">
    <p style="color:#334155;font-size:11px;margin:0;line-height:1.6;">
      HumanIA · Consultoría en SST · Bogotá, Colombia<br>
      comercial@humania.com.co · +57 310 236 5931<br>
      Lunes a viernes, 8:00 AM – 5:00 PM
    </p>
  </div>
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
