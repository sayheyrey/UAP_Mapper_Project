
document.getElementById("drawer-save").addEventListener("click", () => {
  if (!activeMarker) return;

  const name = document.getElementById("drawer-name").value;
  const notes = document.getElementById("drawer-notes").value;
  const time = document.getElementById("drawer-time").value;
  const pos = activeMarker.getLatLng();

  activeMarker.bindTooltip(name || "🛸").openTooltip();

  saveMarkerToFirestore(
    activeMarker._customId,
    pos.lat,
    pos.lng,
    name,
    notes,
    time
  );

  document.getElementById("marker-drawer").style.display = "none";
});

document.getElementById("drawer-delete").addEventListener("click", () => {
  if (!activeMarker) return;

  map.removeLayer(activeMarker);
  db.collection("markers").doc(activeMarker._customId).delete();

  document.getElementById("marker-drawer").style.display = "none";
  activeMarker = null;
});

