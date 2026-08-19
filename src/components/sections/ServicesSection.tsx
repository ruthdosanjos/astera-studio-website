import { SectionHeader } from '@/components/ui'
import { ServiceCard } from '@/components/services/ServiceCard'
import type { Service } from '@/types'
import { C, F, S } from '@/theme'

const SERVICES: Service[] = [
  {
    num: '01', title: 'Brand Identity', subtitle: 'Identidade Visual',
    description: 'Estratégia de marca, identidade visual e sistemas consistentes para construir marcas reconhecíveis.',
    tags: ['Estratégia', 'Identidade', 'Sistema Visual'],
  },
  {
    num: '02', title: 'Web Design', subtitle: 'Design & Desenvolvimento',
    description: 'Landing pages e sites institucionais que unem direção visual, usabilidade e desenvolvimento.',
    tags: ['UI/UX', 'Desenvolvimento', 'Responsivo'],
  },
  {
    num: '03', title: 'E Commerce', subtitle: 'Comércio Digital',
    description: 'Lojas virtuais pensadas para unir experiência de marca, clareza de navegação e conversão.',
    tags: ['Nuvemshop', 'UX', 'Conversão'],
  },
  {
    num: '04', title: 'UI/UX Design', subtitle: 'Experiências Digitais',
    description: 'Interfaces e experiências construídas a partir das necessidades das pessoas e dos objetivos do negócio.',
    tags: ['Interface', 'Experiência', 'Prototipação'],
  },
  {
    num: '05', title: 'Creative Direction', subtitle: 'Direção Criativa',
    description: 'Direção visual e conceitual para construir presença, coerência e personalidade nos pontos de contato da marca.',
    tags: ['Direção de Arte', 'Linguagem Visual', 'Conceito'],
  },
]

function getServiceGridClass(index: number) {
  if (index < 3) return 'md:col-span-1 lg:col-span-2'
  if (index === 3) return 'md:col-span-1 lg:col-span-3'
  return 'md:col-span-2 lg:col-span-3'
}

export function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: C.surfaceAlternative,
        padding: `${S.sectionPaddingY} ${S.pageGutter}`,
      }}
    >
      <SectionHeader
        index="01"
        label="Serviços"
        aside={
          <p
            className="block text-left md:text-right"
            style={{
              fontFamily: F.sans,
              fontSize: '0.93rem',
              fontWeight: 500,
              color: 'rgba(244,241,234,0.62)',
              maxWidth: '360px',
              lineHeight: 1.65,
            }}
          >
            Da identidade ao produto digital, criamos soluções pensadas para cada etapa da marca.
          </p>
        }
      >
        O que
        <br />
        fazemos
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {SERVICES.map((svc, i) => (
          <div key={svc.num} className={getServiceGridClass(i)}>
            <ServiceCard svc={svc} />
          </div>
        ))}
      </div>
    </section>
  )
}
