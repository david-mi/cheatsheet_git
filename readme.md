# CHEATSHEET GIT
---

## SWITCH

| Commande | Explications |
| - | - |
| `git switch <branche>` | **Changer de branche**|
| `git switch -c <branche>`| **Créer une branche et basculer directement sur celle-ci** |
| `git switch -` | **Revenir sur la branche où on était précédemment** |

## CHECKOUT

| Commande | Explications |
| - | - |
| `git checkout <branche>` | **Changer de branche**|
| `git checkout -b <branche>`| **Créer une branche et basculer directement sur celle-ci** |

## LOG

| Commande | Explications |
| - | - |
|`git log` | **Afficher un log des commits jusqu'à HEAD** | 
|  `git log --all` | **Afficher un log de tous les commits** |
| `git log --oneline` | **Formater l'affichage des logs sur une ligne** |

## COMMIT

| Commande| Explications |
| - | - |
| `git commit -am "<message>"` |  **Indexe et commit tous les fichiers modifiés.** Cela ne remplace pas un `git add .` suivi d'un commit car le flag `-a` va indexer seulement les fichiers suivis alors que `git add .` va aussi prendre les nouveaux fichiers en compte |
|  `git commit --amend` | **Remplace le précédent commit.** Le nouveau commit contiendra les changements qu'on a indexé en plus de ceux du précédent commit. Le hash sera différent. Si on veut changer le nom du commit, on peut rajouter `-m <message>`. Au contraire, si on veut juste ajouter des changements en gardant l'ancien message, on peut ajouter `--no-edit`|

## DIFF

| Commande| Explications |
| - | - |
| `git diff` | **Voir les changements des fichiers suivis mais pas encore ajoutés à l'index.** Possibilité de rajouter l'argument `-w` pour ignorer les espaces. |
| `git diff HEAD` | **Voir tous les changements des fichiers suivis depuis HEAD** |
| `git diff --staged` ou `git diff --cached` | **Voir les changements entre HEAD et ce qu'il y a dans  l'index** |
| `git diff <fichier1> <fichier2> <etc...>` | **Voir les changements dans un ou plusieurs fichiers précis** |
|  `git diff <branche1> <branche2>` ou `git diff <branche1>..<branche2>` | **Comparer les différences sur le dernier commit pointé dans les 2 branches.** possibilité de faire la comparaison sur un ou plusieurs fichiers précis en rajoutant les noms de fichiers à la suite|
| `git diff <commit1> <commit2>` ou `git diff <commit1>..<commit2>`|**Voir les changements entre 2 commits.** Il est aussi possible de ne citer qu'un seul commit et par défaut ça fera une comparaison de ce commit a HEAD, exemple `git diff HEAD~1` va comparer les changements entre le dernier commit et HEAD

# STASH

| Commande| Explications |
| - | - |
| `git stash` | **Retirer et stocker les derniers changements.** Si on veut également ajouter les fichiers non suivis au stash, on peut rajouter l'argument `-u` |
| `git stash list` | **Voir la liste des stashs sauvegardés** |
| `git stash pop` | **Va appliquer le dernier stash sauvegardé dans la branche où on se trouve et le supprimer de la mémoire** |
| `git stash apply` | **Même chose que `--pop` sauf que le stash ne sera pas supprimé** |
|`git stash drop <stash-id>`| **Va supprimer le stash avec l'id pointé**|
|`git stash clear`| **Va supprimer tous les stashs**|

# RESET

| Commande | Explications |
| - | - |
| `git reset <commit>` | **Va déplacer HEAD sur un ancien commit en conservant les modifications faites jusqu'au précédent HEAD dans le répertoire de travail.** Si on veut également conserver aucun des changements, on peut rajouter l'argument `--hard` |

# REVERT 

| Commande | Explications |
| - | - |
| `git revert <commit>` ou `git revert <dernier-commit-ciblé> <premier-commit-ciblé>`| **Va Conserver les anciens commits et faire un nouveau commit en retirant les changements induits par le commit ciblé.** Répète la même opération sur tous les autres commits ciblés si il y en a plusieurs. Pour éviter de potentiels multiples commit, on peut rajouter l'argument `--no-commit` |

# RESTORE

| Commande | Explications |
| - | - |
| `git restore` | **Restaurer le contenu d'un ou plusieurs fichier en fonction de HEAD** |
| `git restore  --source <commit> <fichier1> <fichier2..>` | **Restaurer le contenu d'un ou plusieurs fichier en fonction de du commit spécifié (ne touche pas à l'historique et ne modifie pas les commits)** |
| `git restore --staged <fichier1> <fichier2...>` | **Retirer un ou plusieurs fichier de l'index** |


## INFOS COMPLÉMENTAIRES
---

## Merging

 ![ffmerge](./screens/fast_foward_merge.png)

## Revenir en arrière de plusieurs commits

Si les commits en question n'ont pas été push sur un repo distant, où des personnes travaillent potentiellement dessus, la solution la plus simple serait un `git reset <commit-ciblé>`. Dans le cas inverse, il y aurait 2 autres options qui permettraient de garder l'historique intact : 

- Faire un `git revert <dernier-commit-ciblé> <premier-commit-ciblé>`, ce qui ferait dans l'ordre : 
  - Annuler les changements fait par le dernier commit ciblé (sans le supprimer), et faire un nouveau commit.
  - refaire la même chose mais pour les commits ciblés suivants (du dernier au premier)
  - Les inconvénients seraient qu'il faudrait rajouter un commit supplémentaire par commit ciblé, ce qui peut vite alourdir l'historique. On pourrait rajouter l'argument `--no-commit` pour seulement faire un commit nous-même après les actions.
- Faire un `git restore <commit-ciblé> .`
  - Cela a pour avantage de le pas créer de potentiels conflits et de faire seulement un commit.
