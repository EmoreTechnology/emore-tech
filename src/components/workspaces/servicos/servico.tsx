import React from 'react';
import { useTranslation } from 'react-i18next';
import develop from '../../../assets/desenv.png';
import lgpd from '../../../assets/lgpd.png';
import manutention from '../../../assets/manutencao.png';
// Assets
import design from '../../../assets/web-design.png';
// Components
import ServicosCard from '../../card sevicos/card-servicos.component';
import Message from '../../message-servicos/message.component';
// Styles
import { Container } from './servicos.style';

const Servicos: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      {/* <Message title={t('titleMessageServicos')} description={t('messageServicos')} /> */}

      <div className="content">
        <ServicosCard
          icon={design}
          title={t('titleServicosDesign')}
          description={t('descriptionServicosDesign')}
        />

        <ServicosCard
          icon={develop}
          title={t('titleServicosDeveloping')}
          description={t('descriptionServicosDeveloping')}
        />

        <ServicosCard
          icon={lgpd}
          title={t('titleServicosLGPD')}
          description={t('descriptionServicosLGPD')}
        />

        <ServicosCard
          icon={manutention}
          title={t('titleServicosMaintenance')}
          description={t('descriptionServicosMaintenance')}
        />
      </div>
    </Container>
  );
};

export default Servicos;
