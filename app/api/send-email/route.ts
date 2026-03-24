import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'comercial@humania.com.co';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@humania.com.co';

export async function POST(req: NextRequest) {
  try {
    const { empresa, puntaje, nivel, evaluacionId } = await req.json();

    const nivelEmoji = nivel === 'CRÍTICO' ? '🔴' : nivel === 'MODERADO' ? '🟡' : '🟢';
    const nivelAccion =
      nivel === 'CRÍTICO'
        ? 'Debes realizar un Plan de Mejoramiento de inmediato y ponerlo a disposición del Ministerio del Trabajo.'
        : nivel === 'MODERADO'
        ? 'Elabora un Plan de Mejoramiento y repórtalo a tu ARL en máximo 6 meses.'
        : 'Mantén las evidencias y mejoras en tu Plan Anual de Trabajo. ¡Excelente trabajo!';

    const html = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:sans-serif;background:#0f172a;color:#e2e8f0;padding:0;margin:0;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
    <div style="margin-bottom:32px;">
      <span style="font-size:22px;font-weight:800;color:#fff;">Human<span style="color:#60a5fa;">IA</span></span>
    </div>

    <h1 style="font-size:20px;font-weight:700;color:#fff;margin:0 0 8px;">
      Resultado de tu Autoevaluación SG-SST
    </h1>
    <p style="color:#94a3b8;font-size:14px;margin:0 0 32px;">
      Resolución 0312 de 2019 · Estándares Mínimos
    </p>

    <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;margin-bottom:24px;">
      <p style="color:#94a3b8;font-size:12px;margin:0 0 8px;">EMPRESA</p>
      <p style="color:#fff;font-weight:600;font-size:16px;margin:0 0 4px;">${empresa.nombre}</p>
      <p style="color:#64748b;font-size:13px;margin:0;">NIT: ${empresa.nit}</p>
    </div>

    <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;margin-bottom:24px;text-align:center;">
      <p style="color:#94a3b8;font-size:12px;margin:0 0 12px;">PUNTAJE OBTENIDO</p>
      <span style="font-size:64px;font-weight:900;color:${nivel === 'CRÍTICO' ? '#f87171' : nivel === 'MODERADO' ? '#facc15' : '#4ade80'}">
        ${puntaje.toFixed(1)}
      </span>
      <span style="font-size:24px;color:#64748b;"> / 100</span>
      <div style="margin-top:16px;">
        <span style="display:inline-block;padding:6px 20px;border-radius:999px;background:${nivel === 'CRÍTICO' ? 'rgba(239,68,68,0.2)' : nivel === 'MODERADO' ? 'rgba(234,179,8,0.2)' : 'rgba(34,197,94,0.2)'};color:${nivel === 'CRÍTICO' ? '#f87171' : nivel === 'MODERADO' ? '#facc15' : '#4ade80'};font-weight:700;font-size:14px;">
          ${nivelEmoji} ${nivel}
        </span>
      </div>
    </div>

    <div style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.2);border-radius:12px;padding:16px;margin-bottom:24px;">
      <p style="color:#93c5fd;font-weight:600;font-size:13px;margin:0 0 8px;">¿Qué debes hacer?</p>
      <p style="color:#bfdbfe;font-size:13px;margin:0;line-height:1.6;">${nivelAccion}</p>
    </div>

    <p style="color:#94a3b8;font-size:13px;margin-bottom:24px;line-height:1.6;">
      Nuestro equipo de expertos en SST revisará tu evaluación y se pondrá en contacto contigo para orientarte en el proceso de mejoramiento.
    </p>

    <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://humania.com.co'}/autoevaluacion/resultado/${evaluacionId}"
       style="display:inline-block;background:#3b82f6;color:#fff;padding:12px 24px;border-radius:12px;text-decoration:none;font-weight:600;font-size:14px;margin-bottom:32px;">
      Ver informe completo
    </a>

    <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:0 0 24px;">
    <p style="color:#475569;font-size:12px;margin:0;line-height:1.6;">
      HumanIA · Consultoría en SST · Bogotá, Colombia<br>
      comercial@humania.com.co · +57 310 236 5931
    </p>
  </div>
</body>
</html>
`;

    // Email to company
    if (empresa.email) {
      await resend.emails.send({
        from: `HumanIA SST <${FROM_EMAIL}>`,
        to: empresa.email,
        subject: `Tu Autoevaluación SG-SST: ${puntaje.toFixed(1)}% – Nivel ${nivel}`,
        html,
      });
    }

    // Notification email to admin
    await resend.emails.send({
      from: `HumanIA SST <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: `[Nueva evaluación] ${empresa.nombre} – ${puntaje.toFixed(1)}% ${nivelEmoji} ${nivel}`,
      html: `
        <p><strong>Nueva autoevaluación recibida</strong></p>
        <ul>
          <li>Empresa: ${empresa.nombre}</li>
          <li>NIT: ${empresa.nit}</li>
          <li>Sector: ${empresa.sector}</li>
          <li>Responsable: ${empresa.responsable}</li>
          <li>Email: ${empresa.email}</li>
          <li>Teléfono: ${empresa.telefono || 'No indicado'}</li>
          <li>Trabajadores: ${empresa.trabajadores || 'No indicado'}</li>
          <li>Puntaje: ${puntaje.toFixed(1)} / 100</li>
          <li>Nivel: ${nivel}</li>
          <li>ID: ${evaluacionId}</li>
        </ul>
        <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://humania.com.co'}/autoevaluacion/resultado/${evaluacionId}">
          Ver evaluación completa
        </a>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
