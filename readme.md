# CHEATSHEET GIT
---

## SWITCH

| Rôle | Commande |
| - | - |
| **Changer de branche** | `git switch <branche>` |
| **Créer une branche et basculer sur celle-ci** | `git switch -c <branche>`

## CHECKOUT

| Rôle | Commande |
| - | - |
| **Changer de branche** | `git checkout <branche>` |
| **Créer une branche et basculer sur celle-ci** | `git checkout -b <branche>`

## LOG

| Rôle | Commande |
| - | - |
| **Afficher un log jusqu'à HEAD** | `git log` |
| **Afficher un log jusqu'à HEAD et au dessus** | `git log --all` |
| **Afficher des logs d'une ligne seulement** | `git log --oneline` |

## COMMIT

| Rôle | Commande | Remarques |
| - | - | - |
| **Stage et commit des fichiers** | `git commit -am "<message>"` | Cela ne remplace pas un `git add .` suivi d'un commit car le flag `-a` va stage seulement les fichiers déjà suivis alors que `git add .` va stage les changements sur les fichiers suivis mais aussi les nouveaux fichiers qui n'étaient pas encore suivi |
| **Remplacer son précédent commit** | `git commit --amend` | Cette commande va remplacer l'ancien commit par un nouveau qui contiendra les changements qu'on a stage en plus de ceux précédemment commit. Le hash sera différent. Si on veut changer le nom du commit, on peut rajouter `-m <message>`. Au contraire, si on veut juste ajouter des changements en gardant l'ancien message, on peut ajouter `--no-edit`|

## INFOS COMPLÉMENTAIRES
---

## Merging

 ![ffmerge](./screens/fast_foward_merge.png)



