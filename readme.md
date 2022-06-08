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

| Rôle | <div style="width:250px;">Commande</div> | Remarques |
| - | - | - |
| **Stage et commit des fichiers** | `git commit -am "<message>"` | Cela ne remplace pas un `git add .` suivi d'un commit car le flag `-a` va stage seulement les fichiers déjà suivis alors que `git add .` va stage les changements sur les fichiers suivis mais aussi les nouveaux fichiers qui n'étaient pas encore suivi |
| **Remplacer son précédent commit** | `git commit --amend` | Cette commande va remplacer l'ancien commit par un nouveau qui contiendra les changements qu'on a stage en plus de ceux précédemment commit. Le hash sera différent. Si on veut changer le nom du commit, on peut rajouter `-m <message>`. Au contraire, si on veut juste ajouter des changements en gardant l'ancien message, on peut ajouter `--no-edit`|

## DIFF

| Commande| Explications |
| - | - |
| `git diff` | **Voir les changements  des fichiers suivis mais pas encore stage** Possibilité d'ignorer les espaces en rajoutant l'argument `-w` |
| `git diff HEAD` | **Voir tous les changements des fichiers suivis depuis HEAD** |
| `git diff --staged` ou `git diff --cached` | **Voir les changements qui ont été staged** |
| `git diff <fichier1> <fichier2> <etc...>` | **Voir les changements dans un ou plusieurs fichiers précis** |
|  `git diff <branche1> <branche2>` ou `git diff <branche1>..<branche2>` | **Comparer les différences sur le dernier commit pointé dans les 2 branches.** Possibilité de faire la comparaison sur un ou plusieurs fichiers précis en rajoutant les noms de fichiers à la suite|
| `git diff <commit1> <commit2>` ou `git diff <commit1>..<commit2>`|**Voir les changements entre 2 commits.** Il est aussi possible de ne citer qu'un seul commit et par défaut ça fera une comparaison de ce commit a HEAD, exemple `git diff HEAD~1` va comparer les changements entre le dernier commit et HEAD

# STASH

| Commande| Explications |
| - | - |
| `git stash` | **Retirer et stocker les derniers changements.** Si on veut également ajouter les fichiers non indexés au stash, on peut rajouter l'argument `-u` |
| `git stash list` | **Voir la liste des stashs sauvegardés** |
| `git stash pop` | **Va appliquer le dernier stash sauvegardé dans la branch où on se trouve et le supprimer de la mémoire** |
| `git stash apply` | **Même chose que `--pop` sauf que le stash ne sera pas supprimé** |
|`git stash drop <stash-id>`| **Va supprimer le stash avec l'id pointé**|
|`git stash clear`| **Va supprimer tous les stashs**|

# RESTORE

| Commande | Explications |
| - | - |
| `git restore` | **Restorer le contenu d'un ou plusieurs fichier en fonction de HEAD** |
| `git restore  --source <commit> <fichier1> <fichier2..>` | **Restaurer le contenu d'un ou plusieurs fichier en fonction de du commit spécifié (ne touche pas à l'historique et ne modifie pas les commits)** |
| `git restore --staged <fichier1> <fichier2...>` | **Retirer un ou plusieurs fichier du stage** |


## INFOS COMPLÉMENTAIRES
---

## Merging

 ![ffmerge](./screens/fast_foward_merge.png)



