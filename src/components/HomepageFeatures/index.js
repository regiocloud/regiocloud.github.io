import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Managed Kubernetes',
    image: '/img/dalle-managed-kubernetes.png',
    description: (
      <>
Entdecken Sie die Zukunft der Skalierbarkeit und Effizienz mit unserem herausragenden Managed Kubernetes-Service! Unser Angebot ermöglicht es Ihnen, sich voll und ganz auf Ihre Anwendungen zu konzentrieren, während wir uns um die nahtlose Bereitstellung, Überwachung und Optimierung Ihrer Kubernetes-Infrastruktur kümmern.
      </>
    ),
  },
  {
    title: 'Compute Engine',
    image: '/img/dalle-compute-engine.png',
    description: (
      <>
Automatisieren Sie Ressourcenbereitstellung, optimieren Sie Workloads und erhöhen Sie die Effizienz Ihrer IT-Operationen – alles in Echtzeit und ohne Einschränkungen.

Unsere OpenStack-basierte Compute Engine bietet eine nahtlose Integration von Compute, Storage und Networking, sodass Sie sich voll und ganz auf Innovation konzentrieren können.
      </>
    ),
  },
  {
    title: 'Object Storage',
    image: '/img/dalle-object-storage.png',
    description: (
      <>
Unser Object Storage bietet Ihnen die ultimative Lösung für die ständig wachsenden Anforderungen an Datenspeicherung. Egal ob Sie große Mengen unstrukturierter Daten, Medieninhalte oder kritische Unternehmensinformationen verwalten – mit unserer skalierbaren und hochverfügbaren Plattform, aufbauend auf Ceph, haben Sie die Kontrolle in Ihren Händen.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left">
        <img className={styles.featureImage} src={useBaseUrl(image)} />
      </div>
      <div className="text--justify">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
