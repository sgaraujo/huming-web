import { NextRequest, NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import React from 'react';
import { EvaluacionPDF } from '@/lib/pdf-template';

export async function POST(req: NextRequest) {
  try {
    const { empresa, respuestas, puntaje, nivel, evaluacionId } = await req.json();

    const fecha = new Date().toLocaleDateString('es-CO', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer = await (renderToBuffer as any)(
      React.createElement(EvaluacionPDF, { empresa, respuestas, puntaje, nivel, fecha, evaluacionId })
    );

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="HumanIA-SG-SST-${empresa.nit || 'evaluacion'}.pdf"`,
      },
    });
  } catch (err) {
    console.error('PDF error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
