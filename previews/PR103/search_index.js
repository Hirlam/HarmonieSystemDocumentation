var documenterSearchIndex = {"docs":
[{"location":"Overview/Content/#Harmonie-Content-1","page":"Harmonie Content","title":"Harmonie Content","text":"","category":"section"},{"location":"Overview/Content/#util-1","page":"Harmonie Content","title":"util","text":"","category":"section"},{"location":"QuickStart/ECMWF/TheHarmonieScript/#The-Harmonie-Script-1","page":"The Harmonie Script","title":"The Harmonie Script","text":"","category":"section"},{"location":"DomainDefinition/ModelDomain/#Model-Domain-1","page":"Model Domain","title":"Model Domain","text":"","category":"section"},{"location":"#Harmonie-System-Documentation-1","page":"Home","title":"Harmonie System Documentation","text":"","category":"section"},{"location":"QuickStart/ECMWF/ECMWF_teleport/#Teleport-1","page":"Teleport","title":"Teleport","text":"","category":"section"},{"location":"Overview/Binaries/#Harmonie-binaries-1","page":"Harmonie binaries","title":"Harmonie binaries","text":"","category":"section"},{"location":"Overview/FileFormats/#File-Formats-in-Harmonie-1","page":"File Formats in Harmonie","title":"File Formats in Harmonie","text":"","category":"section"},{"location":"DomainDefinition/VerticalGrid/#Vertical-Grid-1","page":"Vertical Grid","title":"Vertical Grid","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#Developing-in-the-Hirlam-GitHub-organization-1","page":"GitHub","title":"Developing in the Hirlam GitHub organization","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#Introduction-1","page":"GitHub","title":"Introduction","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Since 2018 and CY43 HIRLAM have used git for code revision control and gitolite as the git server on hirlam.org. HIRLAM is now moving to using Github for ''software development and version control''. This page provides information on how to access the GitHub Hirlam organisation and how to commit your developments, specifically Harmonie. As was the case with hirlam.org's gitolite a fork-and-branch workflow will be used to manage developments. Much of the information here mirrors that provided in [wiki:HarmonieSystemDocumentation/SourceCodeRepository HarmonieSystemDocumentation/SourceCodeRepository].","category":"page"},{"location":"System/GitDeveloperDocumentation/#Becoming-a-member-of-Hirlam-1","page":"GitHub","title":"Becoming a member of Hirlam","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Create a GitHub account: https://github.com – click on Sign up. Details here\nAdd your public ssh key(s) to the account. Details here\nContact your friendly System-core to be invited to the GitHub Hirlam organisation","category":"page"},{"location":"System/GitDeveloperDocumentation/#Fork-and-branch-1","page":"GitHub","title":"Fork and branch","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"You can create a user fork of Harmonie by doing the following:","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Go to https://github.com/Hirlam/Harmonie\nClick on Fork to create a fork of Harmonie for your user (USER)\nClone your fork:","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ git clone git@github.com:USER/Harmonie.git $HOME/git_harmonie/USER/Harmonie","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Further information is available here: https://docs.github.com/en/github/getting-started-with-github/fork-a-repo ","category":"page"},{"location":"System/GitDeveloperDocumentation/#Keep-your-fork-synced-1","page":"GitHub","title":"Keep your fork synced","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"In a terminal change directory to the clone of you fork:","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ cd $HOME/git_harmonie/USER/Harmonie","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"List the current configured remote repository for your fork.","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ git remote -v\norigin\tgit@github.com:USER/Harmonie.git (fetch)\norigin\tgit@github.com:USER/Harmonie.git (push)","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Specify a new remote upstream repository that will be synced with the fork.","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ git remote add upstream git@github.com:Hirlam/Harmonie.git","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Verify the new upstream repository you've specified for your fork.","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ git remote -v\norigin\tgit@github.com:ewhelan/Harmonie.git (fetch)\norigin\tgit@github.com:ewhelan/Harmonie.git (push)\nupstream\tgit@github.com:Hirlam/Harmonie.git (fetch)\nupstream\tgit@github.com:Hirlam/Harmonie.git (push)","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Update develop in your fork.","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ git checkout develop\n$ git pull upstream develop\n$ git push origin develop","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Update pre-CY46h1 in your fork.","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ git checkout pre-CY46h1\n$ git pull upstream pre-CY46h1\n$ git push origin pre-CY46h1","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Further information is available here: https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#keep-your-fork-synced","category":"page"},{"location":"System/GitDeveloperDocumentation/#Contributing-developments-–-develop-1","page":"GitHub","title":"Contributing developments – develop","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Contributions for develop should be developed in your Harmonie fork in a development branch (feature/bugfix/...). The following details how you can get your development upstream.","category":"page"},{"location":"System/GitDeveloperDocumentation/#Create-a-feature-branch-1","page":"GitHub","title":"Create a feature branch","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ cd $HOME/git_harmonie/USER/Harmonie\n$ git checkout develop\n$ git checkout -b feature/descriptive_name_for_developments","category":"page"},{"location":"System/GitDeveloperDocumentation/#Keep-up-to-date-with-develop-1","page":"GitHub","title":"Keep up to date with develop","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Sync your fork as described above\nMerge develop updates in to your branch","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ cd $HOME/git_harmonie/USER/Harmonie\n$ git checkout feature/descriptive_name_for_developments\n$ git merge develop","category":"page"},{"location":"System/GitDeveloperDocumentation/#Creating-a-pull-request-1","page":"GitHub","title":"Creating a pull request","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Once you have committed to your feature branch and wanted them included in the upstream repo you should do the following:","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Push your branch to your fork:","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ cd $HOME/git_harmonie/USER/Harmonie\n$ git checkout feature/descriptive_name_for_developments\n$ git push origin feature/descriptive_name_for_developments","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"When you push your branch information on how to create a pull request will be presented:","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"remote: Resolving deltas: 100% (x/x), completed with x local objects.\nremote: \nremote: Create a pull request for 'feature/descriptive_name_for_developments' on GitHub by visiting:\nremote:      https://github.com/USER/Harmonie/pull/new/feature/descriptive_name_for_developments\nremote: ","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Follow this link","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"request a reviewer\nadd labels to the developemnt (feature/enhancement/...)\nadd comments to help with the review process (Testbed members used/Changes expected if any/...)","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Once the pull request has been approved by the System-core team it will be merged in to develop","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Further information is available here: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request","category":"page"},{"location":"System/GitDeveloperDocumentation/#Contributing-developments-–-pre-CY46h1-1","page":"GitHub","title":"Contributing developments – pre-CY46h1","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Contributions to pre-CY46h1 should be developed in your Harmonie fork in a development branch (feature/bugfix/...). The following details how you can get your development ''upstream''.","category":"page"},{"location":"System/GitDeveloperDocumentation/#Create-a-''feature''-branch-1","page":"GitHub","title":"Create a ''feature'' branch","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ cd $HOME/git_harmonie/USER/Harmonie\n$ git checkout pre-CY46h1\n$ git checkout -b feature/descriptive_name_for_developments","category":"page"},{"location":"System/GitDeveloperDocumentation/#Keep-up-to-date-with-pre-CY46h1-1","page":"GitHub","title":"Keep up to date with pre-CY46h1","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Sync your fork as described above\nMerge develop updates in to your branch","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ cd $HOME/git_harmonie/USER/Harmonie\n$ git checkout feature/descriptive_name_for_developments\n$ git merge pre-CY46h1","category":"page"},{"location":"System/GitDeveloperDocumentation/#Creating-a-pull-request-2","page":"GitHub","title":"Creating a pull request","text":"","category":"section"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Once you have committed to your feature branch and wanted them included in the upstream repo you should do the following:","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Push your branch to your fork:","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"$ cd $HOME/git_harmonie/USER/Harmonie\n$ git checkout feature/descriptive_name_for_developments\n$ git push origin feature/descriptive_name_for_developments","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"When you push your branch information on how to create a pull request will be presented:","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"remote: Resolving deltas: 100% (x/x), completed with x local objects.\nremote: \nremote: Create a pull request for 'feature/descriptive_name_for_developments' on GitHub by visiting:\nremote:      https://github.com/USER/Harmonie/pull/new/feature/descriptive_name_for_developments\nremote: ","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Follow this link","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"request a reviewer\nadd labels to the developemnt (feature/enhancement/...)\nadd comments to help with the review process (Testbed members used/Changes expected if any/...)","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Once the pull request has been approved by the System-core team it will be merged in to develop","category":"page"},{"location":"System/GitDeveloperDocumentation/#","page":"GitHub","title":"GitHub","text":"Further information is available here: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request","category":"page"},{"location":"System/GitDeveloperDocumentation/#Moving-my-branches-from-hirlam.org-1","page":"GitHub","title":"Moving my branches from hirlam.org","text":"","category":"section"}]
}
