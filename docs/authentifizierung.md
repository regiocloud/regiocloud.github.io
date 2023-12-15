---
sidebar_label: Authentifizierung
sidebar_position: 35
---

# Authentifizierung

In der Dokumentation wird der Nutzer `alice` aus der Domain `sample` mit dem
Passwort `password` in der Region A für Beispiele genutzt. Dem Nutzer `alice`
steht das Projekt `sample-project` zur Verfügung.

## Dashboard für Infrastructure as a Service

* https://a.regiocloud.tech/auth/login/

<img
  src={require('./images/authentifizierung/horizon-1.png').default}
  width="50%"
/>

## API & CLI für Infrastructure as a Service

* https://docs.openstack.org/python-openstackclient/latest/configuration/index.html

### Benutzername & Passwort

* https://a.regiocloud.tech/project/api_access/clouds.yaml/

```yaml title="clouds.yaml"
clouds:
  openstack:
    auth:
      auth_url: https://keystone.services.a.regiocloud.tech
      project_name: "sample-project"
      project_domain_name: "sample"
      username: "alice"
      user_domain_name: "sample"
    region_name: "RegionA"
    interface: "public"
    identity_api_version: 3
```

```yaml title="secure.yaml"
clouds:
  openstack:
    auth:
      password: "password"
```

### Application Credentials

* https://docs.openstack.org/keystone/latest/user/application_credentials.html

<img
  src={require('./images/authentifizierung/horizon-application-credentials-1.png').default}
  width="50%"
/>

<img
  src={require('./images/authentifizierung/horizon-application-credentials-2.png').default}
  width="50%"
/>

<img
  src={require('./images/authentifizierung/horizon-application-credentials-3.png').default}
  width="50%"
/>

```yaml title="clouds.yaml"
clouds:
  openstack:
    auth:
      auth_url: https://keystone.services.a.regiocloud.tech
      application_credential_id: "355300a7cdd5459b80310308099b9926"
      application_credential_secret: "Bn_RwoUbP8e5IMLr-gRvGImQCBa6HOtBkr5tgDmEJIcqhd3QB|1uE_ORsDVYBQMrAShPFma3DQQmQ7TOU4Fbwg"
    region_name: "RegionA"
    interface: "public"
    identity_api_version: 3
    auth_type: "v3applicationcredential"
```
