const scene = document.querySelector("#scene");
const pageKicker = document.querySelector("#pageKicker");
const pages = document.querySelectorAll(".page");
const routeButtons = document.querySelectorAll("[data-route]");
const toast = document.querySelector("#toast");

const routes = {
  inventory: {
    kicker: "GNF Inventory",
    scene: "scene-inventory",
  },
  "fire-wall": {
    kicker: "Fire Wall",
    scene: "scene-fire-wall",
  },
  sacrifice: {
    kicker: "GNF Sacrifice",
    scene: "scene-sacrifice",
  },
  store: {
    kicker: "GNF Store",
    scene: "scene-store",
  },
  socials: {
    kicker: "GNF Socials Hub",
    scene: "scene-socials",
  },
  referrals: {
    kicker: "GNF Referrals",
    scene: "scene-referrals",
  },
  faq: {
    kicker: "GNF FAQ",
    scene: "scene-faq",
  },
};

function setRoute(routeName) {
  const route = routes[routeName] ? routeName : "socials";
  const config = routes[route];

  pages.forEach((page) => {
    page.classList.toggle("active", page.id === route);
  });

  routeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.route === route);
  });

  scene.className = `scene ${config.scene}`;
  pageKicker.textContent = config.kicker;
  history.replaceState(null, "", `#${route}`);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

routeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const route = button.dataset.route;
    if (routes[route]) {
      setRoute(route);
    }
  });
});

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", () => showToast(button.dataset.toast));
});

document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(`#${button.dataset.openModal}`)?.classList.add("open");
  });
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".modal-backdrop")?.classList.remove("open");
  });
});

document.querySelectorAll(".modal-backdrop").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("open");
    }
  });
});

const storeTabContent = {
  packs: {
    title: "Packs",
    description: "Buy unopened farming packs with Burn. They stay sealed in your profile gallery until you open them for rewards like fragments, boosters, bonus drops, or other platform items.",
  },
  "nft-packs": {
    title: "NFT Packs",
    description: "Buy limited Leader NFT packs directly from the Store. Each Leader has a capped Store supply, and purchased packs remain unopened until you reveal them from Inventory.",
  },
};

document.querySelectorAll("[data-store-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.storeTab;
    const content = storeTabContent[tab] || storeTabContent.packs;
    document.querySelectorAll("[data-store-tab]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    document.querySelector("#storePackTitle").textContent = content.title;
    document.querySelector("#storePackDescription").textContent = content.description;
  });
});

document.querySelectorAll("[data-referral-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.referralTab;
    document.querySelectorAll("[data-referral-tab]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    document.querySelector("#referralInvitePanel")?.classList.toggle("active", tab === "invite");
    document.querySelector("#referralRewardsPanel")?.classList.toggle("active", tab === "rewards");
  });
});
document.querySelectorAll("[data-inventory-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.inventoryTab;
    document.querySelectorAll("[data-inventory-tab]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    document.querySelector("#packsTab").classList.toggle("active", tab === "packs");
    document.querySelector("#leadersTab").classList.toggle("active", tab === "leaders");
    document.querySelector("#boostersTab").classList.toggle("active", tab === "boosters");
    document.querySelector("#historyTab").classList.toggle("active", tab === "history");
  });
});

document.querySelectorAll("[data-history-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.historyFilter;
    document.querySelectorAll("[data-history-filter]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    document.querySelectorAll(".history-table tbody tr").forEach((row) => {
      if (filter === "all") {
        row.style.display = "";
      } else {
        row.style.display = row.dataset.historyType === filter ? "" : "none";
      }
    });
  });
});

const firewallPanels = {
  running: "#runningPanel",
  results: "#resultsPanel",
  "my-voting": "#myVotingPanel",
  defrost: "#defrostPanel",
};

function setFirewallTab(tab) {
  const activeTab = firewallPanels[tab] ? tab : "running";
  document.querySelectorAll("[data-firewall-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.firewallTab === activeTab);
  });
  Object.entries(firewallPanels).forEach(([key, selector]) => {
    document.querySelector(selector)?.classList.toggle("active", key === activeTab);
  });
}

document.querySelectorAll("[data-firewall-tab]").forEach((button) => {
  button.addEventListener("click", () => setFirewallTab(button.dataset.firewallTab));
});

document.querySelectorAll("[data-firewall-tab-jump]").forEach((button) => {
  button.addEventListener("click", () => setFirewallTab(button.dataset.firewallTabJump));
});

const campaignVisitTask = document.querySelector("#campaignVisitTask");
const campaignCount = document.querySelector("#campaignCount");

campaignVisitTask?.addEventListener("click", () => {
  const nextCount = Math.min(Number(campaignCount?.textContent || 0) + 1, 2000);
  if (campaignCount) campaignCount.textContent = String(nextCount);
  setRoute("socials");
  document.querySelector("#socials")?.scrollIntoView({ block: "start", behavior: "smooth" });
  showToast("Campaign task opened");
});


window.addEventListener('message', (event) => {
  if (event.data?.type !== 'gnf-social-details-open') return;
  document.querySelector('#socials')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
});

setRoute(location.hash.replace("#", ""));
