(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{333:function(e,t,r){"use strict";r.r(t);var s=r(14),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"almalinux-migration-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-migration-guide"}},[e._v("#")]),e._v(" AlmaLinux Migration Guide")]),e._v(" "),t("p",[e._v("This guide describes how to convert your operating system to AlmaLinux using the "),t("a",{attrs:{href:"https://github.com/AlmaLinux/almalinux-deploy",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Migration tool"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("What OSes can be converted:")]),e._v(" "),t("ul",[t("li",[e._v("CentOS 8")]),e._v(" "),t("li",[e._v("CentOS Stream 8, 9")]),e._v(" "),t("li",[e._v("Oracle Linux 8, 9")]),e._v(" "),t("li",[e._v("RHEL 8, 9")]),e._v(" "),t("li",[e._v("Rocky Linux 8, 9")]),e._v(" "),t("li",[e._v("Virtuozzo Linux (VZLinux) 8, 9")])]),e._v(" "),t("p",[e._v("This tool also supports cPanel, Plesk and DirectAdmin panels.")]),e._v(" "),t("h2",{attrs:{id:"how-to-migrate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-migrate"}},[e._v("#")]),e._v(" How to Migrate")]),e._v(" "),t("p",[e._v("The minimal supported version of EL8 operating systems is 8.4. In case your OS version is lower, please, upgrade it.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("It's recommended to have a backup or snapshot of your system. There'll be a restore point if something will go wrong.")])]),e._v(" "),t("p",[e._v("Follow these steps to convert your EL8 or EL9 system to AlmaLinux using CLI:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following command to update your operating system if needed:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo dnf update -y\n")])])]),t("ul",[t("li",[e._v("Run the following command to download "),t("a",{attrs:{href:"https://github.com/AlmaLinux/almalinux-deploy/blob/master/almalinux-deploy.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("almalinux-deploy.sh"),t("OutboundLink")],1),e._v(" script:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -O https://raw.githubusercontent.com/AlmaLinux/almalinux-deploy/master/almalinux-deploy.sh\n")])])]),t("ul",[t("li",[e._v("Run the script:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo bash almalinux-deploy.sh\n")])])]),t("ul",[t("li",[e._v("Check the output for any errors. If the conversion went without any issues, you'll see that "),t("code",[e._v("Migration to AlmaLinux is completed")]),e._v(" in the output.")]),e._v(" "),t("li",[e._v("Reboot the system to boot with AlmaLinux kernel:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo reboot\n")])])]),t("ul",[t("li",[e._v("Ensure that your system was successfully converted:\n"),t("ul",[t("li",[e._v("Check the release file:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cat /etc/redhat-release\nAlmaLinux release 8.7 (Stone Smilodon)\n")])])]),t("ul",[t("li",[e._v("Check that the system boots with AlmaLinux kernel by default:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ sudo grubby --info DEFAULT | grep AlmaLinux\ntitle="AlmaLinux (4.18.0-425.3.1.el8.x86_64) 8.7 (Stone Smilodon)"\n')])])])])]),e._v(" "),t("h2",{attrs:{id:"migrating-from-centos-versions-lower-than-8-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-centos-versions-lower-than-8-4"}},[e._v("#")]),e._v(" Migrating from CentOS versions lower than 8.4")]),e._v(" "),t("p",[e._v("There are a few additional moments when you are converting your CentOS System.\nCentOS 8.4 or 8.5 is required to convert to AlmaLinux. If your CentOS version is lower, it is recommended to update it to 8.5 before converting to AlmaLinux. Though, it's not necessary if your CentOS version is at least CentOS 8.4.")]),e._v(" "),t("ul",[t("li",[e._v("As of January 31, 2022, the CentOS 8 mirror lists are offline. To successfully perform "),t("code",[e._v("dnf update -y")]),e._v(" you need to update your "),t("code",[e._v("dnf")]),e._v(" config files to point to a valid mirror. You can use the following "),t("code",[e._v("sed")]),e._v(" commands for convenience to restore dnf to a functional state that will let you update to 8.5 and subsequently AlmaLinux.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[baseos\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/BaseOS/$basearch/os' /etc/yum.repos.d/CentOS-Linux-BaseOS.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[appstream\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/AppStream/$basearch/os' /etc/yum.repos.d/CentOS-Linux-AppStream.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[cr\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/ContinuousRelease/$basearch/os' /etc/yum.repos.d/CentOS-Linux-ContinuousRelease.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[devel\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/Devel/$basearch/os' /etc/yum.repos.d/CentOS-Linux-Devel.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[extras\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/extras/$basearch/os' /etc/yum.repos.d/CentOS-Linux-Extras.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[fasttrack\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/fasttrack/$basearch/os' /etc/yum.repos.d/CentOS-Linux-FastTrack.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[ha\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/HighAvailability/$basearch/os' /etc/yum.repos.d/CentOS-Linux-HighAvailability.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[plus\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/centosplus/$basearch/os' /etc/yum.repos.d/CentOS-Linux-Plus.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[powertools\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/PowerTools/$basearch/os' /etc/yum.repos.d/CentOS-Linux-PowerTools.repo\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Alternatively, you can use the "),t("code",[e._v("-f")]),e._v(" flag to handle this for you when running the "),t("a",{attrs:{href:"https://github.com/AlmaLinux/almalinux-deploy/blob/master/almalinux-deploy.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("almalinux-deploy.sh"),t("OutboundLink")],1),e._v(" script:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo bash almalinux-deploy.sh -f\n")])])])]),e._v(" "),t("ul",[t("li",[e._v("Run the following command to update your operating system:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo dnf update -y\n")])])]),t("ul",[t("li",[e._v("Reboot the system after the updating:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo reboot\n")])])]),t("ul",[t("li",[e._v("Run the following command to download "),t("a",{attrs:{href:"https://github.com/AlmaLinux/almalinux-deploy/blob/master/almalinux-deploy.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("almalinux-deploy.sh"),t("OutboundLink")],1),e._v(" script:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -O https://raw.githubusercontent.com/AlmaLinux/almalinux-deploy/master/almalinux-deploy.sh\n")])])]),t("ul",[t("li",[e._v("Run the script:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo bash almalinux-deploy.sh\n")])])]),t("ul",[t("li",[e._v("Ensure that your system was successfully converted:\n"),t("ul",[t("li",[e._v("check the release file")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cat /etc/redhat-release\nAlmaLinux release 8.7 (Stone Smilodon)\n")])])]),t("ul",[t("li",[e._v("check that the system boots with AlmaLinux kernel by default")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ sudo grubby --info DEFAULT | grep AlmaLinux\ntitle="AlmaLinux (4.18.0-425.3.1.el8.x86_64) 8.7 (Stone Smilodon)"\n')])])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);