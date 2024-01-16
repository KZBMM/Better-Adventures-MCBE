//Simple Library

export function calcDistance(vector3_0, vector3_1) {
	let xDist = Math.abs(vector3_0.x - vector3_1.x);
	let zDist = Math.abs(vector3_0.z - vector3_1.z);
	let dist2Dsqr = Math.pow(xDist, 2) + Math.pow(zDist, 2);
	let yDist = Math.abs(vector3_0.y - vector3_1.y);
	let dist3D = Math.sqrt(dist2Dsqr + Math.pow(yDist, 2));
	return dist3D;
}
