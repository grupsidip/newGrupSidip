import React from "react"
import { Row, Col, Container, Image } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import invest1 from '../images/investigacao/invest1.jpg'

const Investigacao = () => (
  <Layout pageInfo={{ pageName: "Investigacao" }}>
    <SEO title="Investigacao" />
    <Container >
      <Row className="justify-content-center my-3">
        <Col className="bg-dark">
          <h1 className="text-center text-uppercase text-white font-weight-bold">Investigação</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <h2>Inteligência e Peritos</h2>
          <Image src={invest1} thumbnail fluid className='float-left mr-2 mt-1'></Image>
          <p className='text-left'> <FontAwesomeIcon icon={faAngleRight} className='mr-1' />
            É uma agência de Investigação Privada e de Peritos, que exerce suas atividades a nível Nacional e Internacional, com escritório central em FORTALEZA e experiência no mercado, com os mais modernos e eficientes aparelhos de Investigação e Perícia Documental existentes hoje.
            Os seus diretores, Gleudison, Amaral e Juan - Tomas, desenvolvem desde 1999, suas atividades de profissional na área da investigação privada, o que lhe deu uma grande experiência no ramo.
            Essa experiência, aliada à formação de Detetives Privados, ministrada no CRD-CE , Conselho dos Detetives do Ceará-Brasil, veio permitir a criação desta agência no ano de 2001.
            Desde então, temos como clientes, várias empresas multinacionais, escritórios de advogados, seguradoras, empreendimentos hoteleiros, empresas de transportes, grandes superfícies, banca e de outros sectores econômicos e particulares em geral. Sendo uma das mais respeitadas empresas, no ramo de Investigações, e sua experiência comprovada e aprovada pelos seus clientes.
            Operamos atualmente em todo o país e estrangeiro, e Com 9 anos contínuos como Agência de Investigação Privada é hoje uma das principais neste rubro em Latino América , demonstrada per uma continuidade atingida, graças à nossa eficiência e seriedade, sendo conceituada entre as melhores e muito respeitada, entre todos os profissionais de investigação.
            Somos Delegado Oficial e Membros de Varias Associações Européias de Investigação Privada, Criminalistas e de Peritos, assim como Representantes de Agências Privadas de Investigação Privada, Criminalistas e de Peritos,a nível Mundial, tendo Colaboradores em todo o mundo.
            Sempre dedicados em servir aos nossos clientes com o máximo sigilo, honestidade e profissionalismo, como estipula nosso código de ética.
            Um cordial cumprimento dá Diretoria dó GRUP-SIDIP.
        </p>
        </Col>
        <Col md={12} lg={6}>
          <h2>Detetives</h2>
          <p className='text-left'><FontAwesomeIcon icon={faAngleRight} className='mr-1' />
            Confiança e Seriedade

            O GRUP-SIDIP dispõe de meios técnicos potentes para levar a cabo suas missões e pode recorrer a uma rede de pesquisadores e correspondentes com experiência às técnicas de pesquisas e vigilância, legalmente declaradas segundo as leis e decretos vigentes ·

           Empresa de investigação com escritório próprio.
            Contamos com escritório de recepção e operacional, cumprindo com eficiência os serviços que oferecemos.
           Garantimos total sigilo das informações levantadas conforme acordo contratual devidamente firmado entre as partes.
           Temos profissionais altamente qualificados e devidamente registrados no CRD-CE-Brasil (Conselho dos Detetives do Ceará-Brasil). www.crd-ce.com.br
           Equipes com Agentes masculinos e femininos, treinados e especializados para cada caso.
            Sigilo, Privacidade e Segurança:
            <ul>
              <li>Após a adjudicação do serviço será atribuído ao cliente um código interno de serviço, sendo codificadas todas as informações respeitantes tanto ao cliente como ao serviço contratado.
              </li>
              <li>
                Os Relatórios Parciais (se necessários) e o Relatório Final serão, salvo indicação expressa em contrário por parte do cliente, sempre enviados por e-mail.
              </li>
              <li>
                Quando forem utilizados suportes Ópticos (DVD ou CD), Magnéticos de Gravação (Vídeo ou Áudio) ou Fotográficos, deverá ser sempre especificado pelo cliente o endereço seguro para envio dos originais.
              </li>
              <li>
                Todas as informações recebidas como: pedidos de consulta, informações, dados do cliente ou relatórios, serão eliminados de forma definitiva dos nossos sistemas informáticos, 5 dias após conclusão do serviço.
              </li>
              <li>
                Por razões de segurança as comunicações por telefone, fax ou móvil serão necessariamente limitadas e todas as ligações telefônicas sem exceção serão verificadas, sendo rejeitadas quaisquer comunicações originárias de números confidenciais ou anônimos.
              </li>
            </ul>
          </p>
        </Col>

        <Col md={12} lg={6}>
          <h2> Princípios e Ética</h2>
          <p className='text-left'>
            <ul>
              <li>
                Apesar de oferecermos aos nossos clientes um serviço de Investigação de Alta Qualidade, em circunstância alguma violaremos a Lei.
            </li>
              <li>
                Para nós, todos os nossos clientes são igualmente importantes, independentemente do tipo ou gênero do caso em investigação.
            </li>
              <li>
                As investigações que fazemos sempre, foram realizadas com todo o empenho e usando do máximo sigilo e da máxima correção, seguimos sempre o que achamos que está certo, independentemente das conseqüências e de quaisquer pressões externas, tratando todas as pessoas envolvidas com dignidade, respeito e consideração.
            </li>
              <li>
                Toda a informação fornecida não derivada diretamente dos nossos investigadores, é proveniente de registros públicos e de outras fontes humanas e como tal, passível de erros ou omissões, pelo que, em alguns casos não nos é possível apurar e certificar a sua total veracidade
            </li>
            </ul>
          </p>
        </Col>

        <Col md={12} lg={6}>
          <h2>Condições do serviço contratado</h2>

          <p className='text-left'><FontAwesomeIcon icon={faAngleRight} className='mr-1' />
            De conformidade com as recomendações Deontológicas do CRD-CE-Brasil (Conselho dos Detetives do Ceará-Brasil), todas as missões confiantes ao GRUP-SIDIP são objeto de um mandato de poder escrito e assinado pelas duas partes e por um relatório de missão escrito e referido as circunstâncias entregue no final da missão, com expedição de uma nota Final de honorários.
           Todas as missões estão cobertas pelo segredo profissional e não são objeto de nenhuma revelação exceto relatório entregue ao cliente ou o seu advogado sob sua responsabilidade.
           Os honorários se fixam de comum acordo no princípio da missão com a parte demandante e variam segundo a duração da missão, sua complexidade e os meios postos em:
           Diário ou semanal,
Preço Fixo da missão. </p>
        </Col>

        <Col lg={12}>
          <h2>Procedimento de contratação</h2>
          <p className='text-left'><FontAwesomeIcon icon={faAngleRight} className='mr-1' />
            Antes de começar qualquer serviço de Pesquisa Privada é necessário formalizar o contrato a inclinação do correspondente ACORDO, assinado por ambas as partes, no qual se legitima ao detetive por escrito para poder tomar parte no procedimento correspondente.
            Imediatamente os dados do cliente e da investigação se anotam no LIVRO DE REGISTRO DE ATIVIDADE, para uso exclusivo e intransferível do detetive.
            Toda a informação contribuída pelos nossos clientes e obtida por esta parte é de caráter CONFIDENCIAL, e não se confecciona com ela nenhum tipo de BANCO DE DADOS, nem física nem eletrônica, arquivando esta durante os prazos que estabelece a legislação vigente.
            Uma vez orçado o serviço de pesquisa privada é necessário entregar a conta 50% da quantidade final no caso de trabalhos a preço fechado. Quando o serviço se fatura por dia é necessário abonar as primeiras cinco horas de serviço no momento da contratação.
            Para mais informação sobre possíveis formas de financiamento e pagamento adiado ligue para ao nosso escritório. </p>
        </Col>
        <Row>
          <Col md={12} lg={6}>
            <h2>Serviços disponiveis</h2>
            <p className='text-left'>
              Departamento de serviços confidenciais:
            <ul>
                <li>Casos Conjugais e extraconjugais</li>
                <li>Investigação Pessoal e pré-nupcial</li>
                <li>Filmagens, fotos e gravações legais sigilosas</li>
                <li>Serviço Segredo de Informações em fábricas e Comércios.</li>
                <li>Prosseguimentos - Paradeiros.</li>
                <li>Acumulação de provas para julgamentos do divórcio e dos alimentos.</li>
                <li> Acidentes de Veículos.</li>
                <li> Acidentes de Trabalho.</li>
                <li> Informes Comerciais e Privados - Pró-labores.</li>
                <li> Investigações de solvências para INVERSORES E FUTUROS SÓCIOS.</li>
                <li> Investigações sobre falsificação de marcas e produtos.</li>
                <li>Informes sobre inquilinos e Garantes.</li>
                <li>Investigações sobre competência desleal.</li>
                <li>Investigações sobre transferências de vendas.</li>
                <li>Localização de Máquinas e Veículos sub-judices.</li>
                <li>Escutas - Telefone / Gravações. ( Somente as permitidas legalmente )</li>
              </ul>
            </p>
          </Col>
          <Col md={12} lg={6}>
            <h2>Departamento de serviços técnicos</h2>
            <p className='text-left'>
              <ul>
                <li>
                  Contra Espionagem e Contra Sabotagem Industrial.
                </li>
                <li>
                  Investigações de Irregularidades Administrativas.
                </li>
                <li>
                  Controle de Divisões - Corredores - Visitantes - Distribuidores.
                </li>
                <li>
                  Falsificação de Rótulos - Defraudações.
                </li>
                <li>
                  Assistência Advocatícia e Policial.
                </li>
                <li>
                  Prevenção de Incêndios- Prevenção de Acidentes.
                </li>
                <li>
                  Investigações de Destruições.
                </li>
                <li>
                  Investigações Cidadãos e Comerciais.
                </li>
                <li>
                  Investigações de Mercado
                </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            Nossa Equipe pode realizar ainda os seguintes serviços:
            <ul>
              <li>
                Realizar filmagens com micro câmeras ocultas em diversos objetos como: Bolsas, Pastas, Maletas, Óculos e outros;
              </li>
              <li>
                Colocar escutas ambientais no automóvel de seu conjugue, para serem ouvidas conversas comprometedoras e "namoros".
              </li>
            </ul>
            Serviços Complementares de Apoio e Consultoria:
            Segurança Eletrônica:
            <ul>
              <li>
                CFTV (Circuito fechado de TV) Digital (monitoramento via internet com micro- câmeras imperceptíveis)
              </li>
              <li>
                Alarmes
              </li>
              <li>
                Cerca elétrica
              </li>
            </ul>
            Perícia Veicular:
            <ul>
              <li>
                Procedência do veículo.
              </li>
              <li>
                Suspeita de adulteração.
              </li>
              <li>
                Análise de doc's (CRV, CRVL, CNH).
              </li>
              <li>
                Busca e apreensão de veículos.
              </li>
              <li>
                Roubo e furto.
              </li>
              <li>
                Clonagem de veículos.
              </li>
              <li>
                Histórico do veículo: roubo/furto, KM, acidentes, leilões;
              </li>
              <li>
                Duplicidade de motor.
              </li>
            </ul>
            Office
            Perícia Criminal:
            <ul>
              <li>
                Levantamento de impressões digitais.
              </li>
              <li>
                exames Grafotécnicos e Documentoscopicos.
              </li>
              <li>
                Autenticidade de materiais audiovisuais.
              </li>
              <li>
                Análise de materiais físicos em geral.
              </li>
            </ul>
            Perícia Incêndios:
            <ul>
              <li>
                Gabinete Técnico pericial, com amplia experiência no setor de seguros e privado, dedicados as investigações de danos em sinistros e bens, assim como determinação das causas que o originam.
              </li>
            </ul>
            Trabalhando em parceria com os Advogados:
            <ul>
              <li>
                Levantamento de informações confidenciais para serem expostas ao Tribunal Judiciário.
            </li>
              <li>
                localização de Documentos comprobatórios de enriquecimento dos processos judiciais.
            </li>
              <li>
                Identificação de endereços residências/comerciais para citações judiciais.
            </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2>Orçamento</h2>
            <p className='text-left'><FontAwesomeIcon icon={faAngleRight} className='mr-1' />
           É preciso levar em conta vários fatores, os quais influem diretamente na dificuldade do mesmo, e, por conseguinte no preço final.
           Tais fatores são a situação geográfica, os meios técnicos ou humanos que hão de empregar-se, o tempo de execução, etc…
           No GRUP-SIDIP , estaremos encantados de estudar seu problema minuciosamente e enviar-lhe de maneira gratuita um orçamento aproximado.
          </p>
          </Col>

          <Col md={12}>
            <h2>Materiais para os serviços</h2>
            <p className='text-left'>
              <ul>
                <li>
                  Veiculo especial de vigilância
                </li>
                <li>
                  Motos
                </li>
                <li>
                  Câmara cor, miniatura sem fio, Fixas, portátil, filmadoras noturnas, câmaras digitais, mini-gravadoras, etc.
                </li>
                <li>
                  Vigilância a distância acoplada a uma emissora vídeo
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  </Layout >
)

export default Investigacao
