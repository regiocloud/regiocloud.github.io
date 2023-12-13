---
sidebar_label: Authentifizierung
sidebar_position: 35
---

# Authentifizierung

## clouds.yaml

* https://docs.openstack.org/python-openstackclient/latest/configuration/index.html
* https://a.regiocloud.tech/project/api_access/clouds.yaml/

```yaml title="clouds.yaml"
clouds:
  openstack:
    auth:
      auth_url: https://keystone.services.a.regiocloud.tech
      username: "alice"
      project_id:be3e1ab512d44b0f8c874fceb98e857a
      project_name: "sample-project"
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
