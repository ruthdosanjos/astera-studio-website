import { SectionHeader } from '@/components/ui'
import { ValueCard } from '@/components/values/ValueCard'
import type { Value } from '@/types'
import { C, S } from '@/theme'

const VALUES: Value[] = [
  { num: '01', sym: '◈', title: 'Estratégia', body: 'Antes de criar, buscamos entender. Cada escolha parte de contexto, intenção e direção.' },
  { num: '02', sym: '◇', title: 'Excelência', body: 'Cuidamos do todo sem ignorar os detalhes. Qualidade está tanto na ideia quanto na execução.' },
  { num: '03', sym: '○', title: 'Transparência', body: 'Relações claras, processos compreensíveis e decisões compartilhadas do início ao fim.' },
  { num: '04', sym: '△', title: 'Criatividade', body: 'Questionamos o óbvio para encontrar soluções com identidade, propósito e relevância.' },
  { num: '05', sym: '⬡', title: 'Evolução', body: 'Aprendemos, testamos e refinamos continuamente. Porque boas soluções também precisam acompanhar mudanças.' },
]

export function ValuesSection() {
  return (
    <section style={{ backgroundColor: C.black, padding: `${S.sectionPaddingY} ${S.pageGutter}` }}>
      <SectionHeader index="04" label="Valores">
        O que nos<br />guia
      </SectionHeader>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6"
        style={{ border: `1px solid ${C.lineSubtle}`, borderRight: 'none', borderBottom: 'none' }}
      >
        {VALUES.map((val, i) => (
          <div
            key={val.num}
            className={i < 3 ? 'lg:col-span-2' : i === 3 ? 'lg:col-span-3' : 'md:col-span-2 lg:col-span-3'}
            style={{ borderRight: `1px solid ${C.lineSubtle}`, borderBottom: `1px solid ${C.lineSubtle}` }}
          >
            <ValueCard val={val} />
          </div>
        ))}
      </div>
    </section>
  )
}
