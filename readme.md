# CHEATSHEET GIT
---

## BRANCH 

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git branch` | **Visualiser les branches locales.**|
| `git branch -r`| **Visualiser les branches distantes.**|
| `git branch -a`| **Visualiser les branches locales et distantes.**|
| `git branch <branche>` | **Créer une nouvelle branche.** |
| `git branch -d <branche>` | **Supprimer la branche en local.** <br> Se positionner en dehors de celle-ci avant d'entrer la commande. <br> Pour forcer la suppression, remplacer `-d` par `-D`. Ca sera nécessaire si la branche n'a pas été mergée. |
| `git branch -m` | **Renommer la branche sur laquelle on est positionné.**  |


## SWITCH

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git switch <branche>` | **Changer de branche.**|
| `git switch -c <branche>`| **Créer une branche et basculer directement sur celle-ci.** |
| `git switch -` | **Revenir sur la branche où on était précédemment.** |

## CHECKOUT

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git checkout <branche>` | **Changer de branche**|
| `git checkout -b <branche>`| **Créer une branche et basculer directement sur celle-ci** |

## LOG

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git log` | **Afficher un log des commits jusqu'à HEAD** | 
| `git log --all` | **Afficher un log de tous les commits** |
| `git log --oneline` | **Formater l'affichage des logs sur une ligne** |
| `git log --graph` | **afficher une représentation grahique de l'historique des commits**|
| `git log --<nombre>` | **limite le nombre de commits affichés par rapport au nombre indiqué** |
| `git log <commit-antérieur-à-commit>..<commit>` | **affiche le log des commits sur la plage donnée.** Il faut préciser le commit le plus ancien des 2 en premier. |

## COMMIT

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git commit -am "<message>"` |  **Stage et commit tous les fichiers modifiés.** <br> Cela ne remplace pas un `git add .` suivi d'un commit car le flag `-a` va stage seulement les fichiers suivis alors que `git add .` va aussi prendre les nouveaux fichiers en compte. |
| `git commit --amend` | **Remplace le précédent commit.** Le nouveau commit contiendra les changements qu'on a stage en plus de ceux du précédent commit. Le hash sera différent. Si on veut changer le nom du commit, on peut rajouter `-m <message>`. Au contraire, si on veut juste ajouter des changements en gardant l'ancien message, on peut ajouter `--no-edit`. Il est possible de changer le nom du commit sans avoir de choses supplémentaires à envoyer.|

## DIFF

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git diff` | **Voir les changements des fichiers suivis mais pas encore stage.** Possibilité de rajouter l'argument `-w` pour ignorer les espaces. |
| `git diff HEAD` | **Voir tous les changements entre les fichiers suivis (qu'ils aient été stage ou non) et HEAD.** |
| `git diff --staged` | **Voir les changements entre HEAD ce qui est stage.** <br> Autre notation : `git diff --cached`|
| `git diff <fichier1> <fichier2...>` | **Voir les changements dans le où les fichiers ciblés.** |
|  `git diff <branche1> <branche2>` | **Voir les changements dans un intervalle de branches (par rapport au dernier commit qu'elles pointent).** <br> Possibilité de faire la comparaison seulement sur certains fichiers ren rajoutant leurs noms à la suite. <br> Autre notation : `git diff <branche1>..<branche2>`
| `git diff <commit1> <commit2>` |**Voir les changements entre 2 commits.** <br> Il est aussi possible de ne citer qu'un seul commit ça fera une comparaison entre HEAD et celui-ci. <br> Par exemple `git diff HEAD~1` va comparer les changements entre le dernier commit et HEAD. <br> Autre notation : `git diff <commit1>..<commit2>`

# STASH

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git stash` | **Retirer les modifications effectuées sur les fichiers suivis et les ajoute au stash.** <br> Si on veut également ajouter les fichiers non suivis au stash, rajouter `-u`. Si on veut rajouter un nom à la sauvegarde, rajouter `-m "<nom>"` |
| `git stash list` | **Voir la liste des sauvegardes faites dans le stash avec leur id.** |
| `git stash pop` | **Appliquer le contenu de la dernière sauvegarde présente dans le stash sur notre working directory de la branche sur laquelle on se trouve. <br> Ca va également supprimer cette sauvegarde du stash.** |
| `git stash apply` | **Même chose que `--pop` sauf que le la sauvegarde se sera pas supprimée du stash.** |
|`git stash drop <numéro-stash>`| **Supprimer la sauvegarde avec l'id pointée du stash.**|
|`git stash clear`| **Supprimer toutes les sauvegardes présentes dans le stash.**|
| `git stash show <numéro-stash>` | **Affiche les modifications de fichier induites dans une sauvegarde.** Pour afficher un diff, rajouter `-p`. Si on ne renseigne pas de numéro, la dernière sauvegarde sera choisie. |

# RESET

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git reset <commit>` | **Déplacer HEAD sur un ancien commit en en préservant les modifications effectuées dans le répertoire de travail.** Si on ne veut pas conserver les changements, on peut rajouter `--hard` |

# REVERT 

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git revert <commit>` ou `git revert <dernier-commit-ciblé> <premier-commit-ciblé>`| **Conserver les anciens commits et faire un nouveau commit en retirant les changements induits par le commit ciblé.** <br> Répète la même opération sur tous les autres commits ciblés si il y en a plusieurs. Pour ne pas commit les changements, rajouter `--no-commit` |

# RESTORE

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git restore <fichier1> <fichier2..> ou . ` | **Restaurer le contenu d'un ou plusieurs fichier à l'état dans lequel ils sont sur HEAD** |
| `git restore  --source <commit> <fichier1> <fichier2..> ou . ` | **Restaurer le contenu d'un ou plusieurs fichier en fonction de du commit spécifié.** <br> Ne va pas modifier les anciens commits. |
| `git restore --staged <fichier1> <fichier2...>` | **Retirer un ou plusieurs fichier du stage.** |

# REMOTE

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git remote`| **Voir les labels des dépots distants liés.** <br> Pour aussi voir l'url associée aux labels, rajouter `-v`. |
|`git remote add <label> <repo-url>`| **Lier un dépot distant avec un dépot local.** La plupart du temps **origin** sera utilisé comme label. On pourrait utiliser n'importe quel nom à la place mais c'est juste une convention. Quand on clone un repository distant, le label associé à l'url du dépot cloné sera nommé origin automatiquement. |
| `git remote rename <label> <new-label>` | **Renommer l'ancien label par le nouveau** |
| `git remote remove <label>` | **Supprimer le label et l'url associée** |


# PUSH

| Commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Explications |
| - | - |
| `git push <label-repo-distant> <branche>` | **Va envoyer les mises à jour de la branche locale vers la branche distante.** <br> Si la liaison entre la branche locale et la branche distante n'a pas encore été faite, on peut rajouter l'argument `-u`. Suite à ça, si le label de la branche distante est nommée `origin`, on pourra juste faire la commande `git push` pour les push suivant via cette branche. Quand le label de la branche distante n'est pas précisé, git utilisera comme valeur par défaut origin, et il pointera la branche distante qui à le même nom que la branche locale. <br> Si on ajoute l'argument `-f` cela aura pour effet d'écraser l'historique de la branche distante par celui en local. Une alternative plus douce est `--force-with-lease` qui fera le push seulement si la branche distante n'a pas été mise à jour entre temps.|
| `git push <label-repo-distant> -d <branche>` | **Supprimer la branche sur un dépot distant.** Autre notation : `git push origin --delete <branche>` |

## INFOS COMPLÉMENTAIRES
---

## Merging

 ![ffmerge](./screens/fast_foward_merge.png)

## Revenir en arrière de plusieurs commits

Si les commits en question n'ont pas été push sur un repo distant, où des personnes travaillent potentiellement dessus, la solution la plus simple serait un `git reset <commit-ciblé>`. Dans le cas inverse, il y aurait 2 autres options qui permettraient de garder l'historique intact : 

- Faire un `git revert <dernier-commit-ciblé> <premier-commit-ciblé>`, qui ferait dans l'ordre : 
  - Annuler les changements induits par le dernier commit ciblé (sans le supprimer), et faire un nouveau commit.
  - refaire la même chose mais pour les commits ciblés suivants (du dernier au premier).
  - Les inconvénients sont qu'il faudrait rajouter un commit supplémentaire par commit ciblé, ce qui peut vite alourdir l'historique. On peut rajouter `--no-commit` pour seulement avoir à faire un commit nous-même après les actions.
- Faire un `git restore <commit-ciblé> .`
  - Cela a pour avantage de le pas créer de potentiels conflits et ne va pas générer plusieurs commits.

  ## Lier une branche locale et distante

  Si on vient de cloner ou fetch un repo distant, les branches distantes seront répertoriées en faisant `git branch -r` mais aucune branche locale correspondante seront liées à celles-ci. Pour éviter de créer une branche nous-même et rentrer une nouvelle commande pour faire la liaison local->distant, on peut simplement effectuer un `git switch <nom-branche-distante>` ce qui aura pour effet de créer une branche ayant de meme nom que celle distante et en même temps établir le suivi (fonctionne aussi avec checkout). Cela revient à effectuer un `git switch -c <branch> --track <remote>/<branch>`